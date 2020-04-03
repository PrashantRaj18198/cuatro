import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://127.0.0.1:8000/graphql/',
});

// const client = new ApolloClient({
//   // Provide required constructor fields
//   cache: cache,
//   link: link,
// });

// client.query({
//     query: gql`
//         {
//             music {
//                 musicLinks
//             }
//         }
//     `
// }).then(response => {
//     console.log(response)
// })

const MUSIC_QUERY = gql`
    query {
        music {
            musicLink
            artistName
            musicName
    }
}
`


class MusicPlayer extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            selected_music : null,
            arr: {}
        }
    }

    render() {
        
        // return (
        //     <div>
        //         <ReactAudioPlayer
        //         src="https://file-examples.com/wp-content/uploads/2017/11/file_example_OOG_1MG.ogg"
        //         controls
        //         />
        //     </div>
            
        // )
        return (
        <div>
        <Query query={MUSIC_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
    
          const linksToRender = data.music
    
          return (
            <div>
              {linksToRender.map(link => 
              <div>
                  <h5>{link.musicName}</h5><br></br>
                  {link.artistName}<br></br>
              <ReactAudioPlayer
                src={link.musicLink}
                controls
                /><br></br>
                </div>)}
            </div>
          )
        }}
      </Query>
      </div>
        )
    }

}

export default MusicPlayer