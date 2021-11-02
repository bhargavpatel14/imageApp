export class Image {
    url: string;
    photographer: string;
    img_name: string;
    tags: [string];
    aprture: string;
    shut_speed: string;
    _id: string;
    reviews: {
        reviewer: string;
        review_txt: string;
        rating: number;
    }[];

    constructor(
        url: string,
        photographer: string,
        img_name: string,
        tags: [string],
        aprture: string,
        shut_speed: string,
        _id: string,
        reviews: []
    ) {
        this.url = url;
        this.photographer = photographer;
        this.img_name = img_name;
        this.tags = tags;
        this.aprture = aprture;
        this.shut_speed = shut_speed;
        this._id = _id;
        this.reviews = reviews;
    }
}
