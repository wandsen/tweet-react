class Favourite extends React.Component{
    render(){
        let tweetCount = this.props.favourite

        console.log(tweetCount)

        return(
            <div>
            {tweetCount}
            </div>
        )
    }
}


class TweetContent extends React.Component{
    render(){

        let textContent = this.props.item.text
        console.log(this.props.item.favorite_count)
        let favouriteCount = this.props.item.favorite_count
        // let favouriteCount = <Favourite favourite = {this.props.item.favorite_count}></Favourite>
        // console.log(favouriteCount)

        return(
            <li>{textContent}{favouriteCount}</li>

        );
    };
};




class Post extends React.Component{
    render(){

        let tweetContent = tweets.map( ( item, index)=>{
            return (
                <TweetContent key={index} item = {item}></TweetContent>
            )

        })
        console.log(tweetContent)


        return(
            <div>
            <ul>{tweetContent}</ul>
            </div>

        );
    };
};




ReactDOM.render(
    <Post/>,
    document.getElementById('root')
);