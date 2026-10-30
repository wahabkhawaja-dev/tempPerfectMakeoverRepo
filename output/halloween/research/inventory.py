from pathlib import Path
import re,json,math
from PIL import Image,ImageDraw
root=Path(__file__).resolve().parents[3]
out=Path(__file__).parent
groups={
 'crown':root/'Assets/_Core/2D Data/Levels/Level 3/1. Crown/Slicing',
 'basin':root/'Assets/_Core/2D Data/Levels/Level 2/3. Cloth/ClothCleaning',
 'alternatives':root/'Assets/_ImportedFromParent/_Core/2D Data/Halloween',
}
items=[]
for group,folder in groups.items():
    files=list(folder.rglob('*.png'))
    if group=='crown': files=[p for p in files if p.parent==folder or p.parent.name in ('Tools','Bg')]
    if group=='basin': files=[p for p in files if p.parent.name in ('clothes','hands to rub','bg')]
    if group=='alternatives': files=files[:32]
    cols=5; cw=250;ch=210
    sheet=Image.new('RGB',(cols*cw,math.ceil(len(files)/cols)*ch),(39,42,49));draw=ImageDraw.Draw(sheet)
    for i,p in enumerate(files):
        im=Image.open(p).convert('RGBA'); meta=p.with_suffix('.png.meta').read_text(encoding='utf-8-sig')
        entry=dict(group=group,path=p.relative_to(root).as_posix(),size=im.size,alpha_bbox=im.getchannel('A').getbbox(),guid=re.search(r'^guid: (\w+)',meta,re.M).group(1))
        items.append(entry)
        im.thumbnail((cw-12,ch-43)); x=(i%cols)*cw; y=(i//cols)*ch
        sheet.paste(im,(x+(cw-im.width)//2,y+5),im)
        draw.text((x+6,y+ch-37),p.name[:34],fill='white')
        draw.text((x+6,y+ch-22),str(entry['size'])+' '+p.parent.name[:20],fill=(180,185,196))
    sheet.save(out/(group+'_contact.png'))
(out/'sprite_inventory.json').write_text(json.dumps(items,indent=2))
print(json.dumps({g:sum(i['group']==g for i in items) for g in groups}))
