import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'epochToDate' })
export class EpochToDatePipe implements PipeTransform {
    transform(value: number): string {
        return this.formatDate(new Date(value));
    }

    formatDate(date: Date) {
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const day = date.getDate().toString().padStart(2, '0');
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        let hours = date.getHours();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        return `${day}-${month}-${year}, ${hours}:${minutes}:${seconds} ${ampm}`;
    }
}