type ImgType = {
      btnImgMoveHandler:  (btnId: string) => void
      btnRef: React.Ref<HTMLButtonElement | null>
      currState: number
  }

 type portDataTy = {
  portData:{
    id: number;
    numb: string;
    tech: string;
    content: string;
    img: string;
  }
}

export type { ImgType, portDataTy };