import { GroupCollectionsService } from './../../wa-groups/services/group-collections/group-collections.service';
import { Component, OnInit } from "@angular/core";
import { SelectOption } from "src/app/core-components/select/select.component";
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ToastrService } from "ngx-toastr";


@Component({
    selector: 'app-post-ad',
    templateUrl: './post-ad.component.html',
    styleUrls: ['./post-ad.component.scss'],
    animations: [
        trigger('inOutAnimation', [
            state('void', style({ opacity: 0, width: '0' })),
            state('*', style({ opacity: 1, width: '*' })),
            transition(':enter', [animate('150ms ease-in-out')]),
            transition(':leave', [animate('150ms ease-in-out')]),
        ]),
    ]
})
export class PostAdComponent implements OnInit {
    constructor(private toastr: ToastrService) { }
    text = '';
    listingType = 'wtb'
    listingOpts: SelectOption[] = [
        { value: 'wtb', label: 'WTB' },
        { value: 'wts', label: 'WTS' },
    ]
    products: Product[] = []
    listingDetails = ''
    imageBuffer: ArrayBuffer | string | null = null;
    ngOnInit(): void {
        this.text = this.getProductListingText()
    }
    addNewProduct() {
        this.products.push({ id: this.products.length + 1, name: '', price: NaN, quantity: NaN, additional_info: '' })
    }
    removeProduct(product: Product) {
        this.products = this.products.filter(p => p.id !== product.id)
    }

    productsChanged() {
        this.text = this.getProductListingText()
    }

    getProductListingText() {
        let text = `*${this.listingType.toUpperCase()}*\n\n`
        this.products.forEach((product, index) => {
            text += `${index + 1}. *${product.name.trim()}* - ${product.price}$ x ${product.quantity} units ${product.additional_info !== '' ? ` - (${product.additional_info.trim()})` : ''}\n`
        })
        text += `\n${this.listingDetails}`
        return text
    }

    sendToGroupCollectionsRequestSent(event: any) {
        this.products = []
        this.listingDetails = ''
        this.imageBuffer = null
        this.productsChanged()
    }

    productById(index: number, product: any) {
        return product.id
    }
}

export type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    additional_info: string;
}