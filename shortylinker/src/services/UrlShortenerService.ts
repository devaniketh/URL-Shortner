import UrlRepository from "@/repositories/UrlRepository";
import shortId from 'shortid';

export class UrlShortenerService {
    private UrlRepository;
    constructor(){
        this.UrlRepository = new UrlRepository();
    }

    async shotenUrl (originalUrl: string) : Promise <string > {
        let url = await this.UrlRepository.getUrlByOriginalUrl(originalUrl);
        if (url){
            return url.shortUrl;
        }
        let shortUrl= shortId();
        url = await this.UrlRepository.getUrlByShortUrl(shortUrl);
        while(url) {
            shortUrl = shortId();
        }

        await this.UrlRepository.createUrl(originalUrl,shortUrl)
    }
}