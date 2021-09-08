class Likes {
    constructor(){
        this.list = [];
    }

    add(value){
        this.list = value;
    }

    likes(value){
        console.log(this.list);
        console.log(this.list.find((like) => like.item_id == value) || 0);
    }
}

const myLikes = new Likes;

export default myLikes;