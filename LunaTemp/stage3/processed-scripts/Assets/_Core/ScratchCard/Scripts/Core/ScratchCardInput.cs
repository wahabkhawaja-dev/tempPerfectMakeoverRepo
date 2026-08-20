using UnityEngine;

namespace ScratchCardAsset.Core
{
	public class ScratchCardInput
	{
		#region Events

		public event ScratchHandler OnScratch;
		public event ScratchStartHandler OnScratchStart;
		public event ScratchLineHandler OnScratchLine;
		public event ScratchHoleHandler OnScratchHole;
		public delegate Vector2 ScratchHandler(Vector2 position);
		public delegate void ScratchStartHandler();
		public delegate void ScratchLineHandler(Vector2 start, Vector2 end);
		public delegate void ScratchHoleHandler(Vector2 position);
		
		#endregion

		private ScratchCard scratchCard;
		private Vector2 eraseStartPositions;
		private Vector2 eraseEndPositions;
		private Vector2 erasePosition;
		private bool isStartPosition;

		const int MaxTouchCount = 10;

		public ScratchCardInput(ScratchCard card)
		{
			scratchCard = card;
			isStartPosition = true;
		}

		Vector2 defPos = new Vector2(1000,0);

		public void Update()
		{
			if (Input.GetMouseButtonDown(0))
			{
				eraseStartPositions = defPos;
                eraseEndPositions = defPos;

                scratchCard.IsScratching = false;

				isStartPosition = true;
			}

			if (Input.GetMouseButton(0))
			{
				TryScratch(Input.mousePosition);
			}

			if (Input.GetMouseButtonUp(0))
			{
				scratchCard.IsScratching = false;

                eraseStartPositions = defPos;
                eraseEndPositions = defPos;
            }
        }

		void TryScratch([Bridge.Ref] Vector2 position)
		{
			try
			{
				if (OnScratch != null)
				{
					erasePosition = OnScratch(position);
				}

				if (isStartPosition)
				{
					eraseStartPositions = erasePosition;
					eraseEndPositions = eraseStartPositions;
					isStartPosition = false;
				}
				else
				{
					eraseStartPositions = eraseEndPositions;
					eraseEndPositions = erasePosition;
				}

				if (!scratchCard.IsScratching)
				{
					//eraseEndPositions = eraseStartPositions;
					//scratchCard.IsScratching = true;
				}
			}
			catch
			{

			}
		}
		
		public void Scratch()
		{
			if (OnScratchStart != null)
			{
				OnScratchStart();
			}

			if (eraseStartPositions == eraseEndPositions)
			{
				if (OnScratchHole != null)
				{
					OnScratchHole(erasePosition);
				}
			}
			else
			{
				if (OnScratchLine != null)
				{
					OnScratchLine(eraseStartPositions, eraseEndPositions);
                }
			}
		}

        public void ScratchAtPoint([Bridge.Ref] Vector2 pos)
        {
            if (OnScratch != null)
                OnScratchHole(OnScratch(pos));
        }
    }
}