from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
import hashlib,json,zipfile,math
root=Path(__file__).resolve().parents[3]
skin=root/'Assets/_Playable/Halloween2026/Sprites/Crown'
out=Path(__file__).parent.parent
files=sorted(skin.rglob('*.png'))
qa=[]
cw,ch=300,300;cols=4
sheet=Image.new('RGB',(cols*cw,math.ceil(len(files)/cols)*ch),(32,27,36));draw=ImageDraw.Draw(sheet)
for i,p in enumerate(files):
    image=Image.open(p).convert('RGBA');alpha=image.getchannel('A')
    qa.append({'path':p.relative_to(root).as_posix(),'size':image.size,'alpha_range':alpha.getextrema(),'alpha_bbox':alpha.getbbox(),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()})
    if p.name!='Room.png' and alpha.getextrema()[0]!=0: raise ValueError('No transparent pixels: '+str(p))
    image.thumbnail((cw-20,ch-45));x=(i%cols)*cw;y=(i//cols)*ch
    sheet.paste(image,(x+(cw-image.width)//2,y+8),image)
    draw.text((x+10,y+ch-30),str(p.relative_to(skin)),fill=(240,226,201))
sheet.save(out/'Crown_Asset_Sheet.png')
(out/'asset_validation.json').write_text(json.dumps(qa,indent=2))
prefix=root/'Assets/_Playable/Halloween2026'
with zipfile.ZipFile(out/'Halloween_Crown_Art_Pack.zip','w',zipfile.ZIP_DEFLATED) as archive:
    for folder in [prefix/'Sprites/Crown',prefix/'Prefabs']:
        for p in folder.rglob('*'):
            if p.is_file():archive.write(p,p.relative_to(root).as_posix())
        meta=folder.with_name(folder.name+'.meta')
        if meta.exists():archive.write(meta,meta.relative_to(root).as_posix())
    for name in ['README.md','replacement_manifest.json','asset_validation.json','unity_validation.json','generation_prompts.json','Crown_Unity_Preview.png','Crown_Clean_Unity_Preview.png','Crown_Asset_Sheet.png']:
        archive.write(out/name,'Halloween_Crown_Readme/'+name)
print(json.dumps({'sprites':len(qa),'zip':str(out/'Halloween_Crown_Art_Pack.zip'),'bytes':(out/'Halloween_Crown_Art_Pack.zip').stat().st_size}))
