import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name : 'filesize'
})

export class FileSize implements PipeTransform{
    transform(value: number) {
        return (value / (1024 * 1024)).toFixed(2) + 'MB' ;
        // throw new Error("Method not implemented.");
    }
}