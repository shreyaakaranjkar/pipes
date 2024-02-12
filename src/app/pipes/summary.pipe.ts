import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'summary'
})

export class SummaryPipe implements PipeTransform{
    transform(value: string, limit : number = 20 ) {
        return value.substring(0,limit) + '....';
        // throw new Error("Method not implemented.");
    }
}