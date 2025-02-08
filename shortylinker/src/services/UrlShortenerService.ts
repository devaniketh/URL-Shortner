import UrlRepository from "@/repositories/UrlRepository";
import shortId from 'shortid';

export class UrlShortenerService {
    private UrlRepository;
    constructor(){
        this.UrlRepository = new UrlRepository();
    }

    async shortenUrl (originalUrl: string) : Promise <string > {
        let url = await this.UrlRepository.getUrlByOriginalUrl(originalUrl);
        if (url){
            return url.shortUrl;
        }
        let shortUrl= shortId();
        url = await this.UrlRepository.getUrlByShortUrl(shortUrl);
        while(url) {
            shortUrl = shortId();
            url = await this.UrlRepository.getUrlByShortUrl(shortUrl)
        }

        await this.UrlRepository.createUrl(originalUrl, shortUrl)
        return shortUrl;

         }
         async getAllUrls(){
            return await this.UrlRepository.getAllUrls();

         }

         async getUrlByShortUrl(shortUrl: string){
            return await this.UrlRepository.getUrlByShortUrl(shortUrl);
         }
}