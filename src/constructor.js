class Likes {
    constructor(){
        this.list = [];
    }

    add(value){
        this.list = value;
    }

    likes(value){
        return this.list.find((like) => like.item_id == value).likes;
    }
}

const myLikes = new Likes;

export default myLikes;