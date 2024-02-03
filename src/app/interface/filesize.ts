export interface Ipipe{
    filename: string;
    type: string;
    size: number;
    imgtype : ImgType
}

export type ImgType = 'doc' | 'pdf' | 'excel'