import DataStore from 'flux/stores/DataStore.js'

class Home extends React.Component {
    render() {
        let allData = DataStore.getAll();
        console.log(allData.posts); 
        let posts = allData.posts;

        return (
            <div>
                <h1 style={{textAlign:'center'}}>Wordpress-REST API-react</h1>
                <h2>Posts By Coding Sastra: </h2>
                {
                    posts.map((data, key)=>{
                        return <div style={{paddingTop:45}}>
                            <a style={{fontSize: 20, color:'black', border: "1px solid",  padding: "10px", boxShadow: "5px 5px 5px #888888", textDecoration:"none"}} href={data.link} target="_blank">{data.title.rendered}</a> <br />
                        </div>
                    })
                }
            </div>
        );
    }
}

export default Home;