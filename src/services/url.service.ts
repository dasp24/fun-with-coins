import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/**
    @desc - list of urls
**/
export enum URLS {
    COINBASE_PRO = 'https://min-api.cryptocompare.com',
    API_KEY = '347cd82cdafa680b42e6fca4d1f3900d7d0b13a61d702e411d74284594380c35'
}

@Injectable()
export class UrlService {
    constructor(private sanitizer: DomSanitizer) { }

    getUrl(key: URLS): string {
        return key;
    }

    getSafeUrl(key: URLS, useHostBase = true): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.getUrl(key, useHostBase));
    }

}
    }
