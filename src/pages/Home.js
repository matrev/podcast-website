import React, { useState, useEffect } from 'react';
import Parser from 'rss-parser';
import { Stack, StackItem } from '@fluentui/react';

export default function Home () {
    // eslint-disable-next-line
    const [latestEpisodes, setLatestEpisodes] = useState([]);
    async function getEpisodes() {
        let parser = new Parser();
        const feed = await parser.parseURL('https://feeds.simplecast.com/kASbzC1o');
        setLatestEpisodes(feed.items);
        console.log("feed: ", feed.items);
    }

    useEffect(() => {
        getEpisodes();
    }, []);

    return (
        <Stack horizontalAlign='center' style={{ paddingTop: 10}} tokens={{childrenGap: 100}}>
            <StackItem className='home-text' horizontalAlign='center'>

                Howdy! We're the Brother Sister Show, a podcast where two siblings keep in touch by talking about movies.
            </StackItem>
            {/* <EpisodeCollection alignItems='center' episodes={latestEpisodes.slice(0,1)} /> */}

            <Stack horizontal horizontalAlign='space-between'>

                <StackItem className='home-header' horizontalAlign='center'>
                    Latest Episode
                    <iframe title='latest-episode' height="200px" width="75%" frameborder="no" scrolling="no" seamless src="https://player.simplecast.com/417cffe7-6511-4d45-83a2-f3ac7d14208c?dark=true"></iframe>
                </StackItem>
                <StackItem className='home-header' horizontalAlign='center'>
                    Follow Us
                    <Stack horizontal verticalAlign='center' horizontalAlign='space-evenly' tokens={{childrenGap: 10}}>
							<a href='https://open.spotify.com/show/0J0EQrHUMKJd9gbN9nQdh1' target='_blank' style={{paddingRight: '5px'}}>
								<img src={require("../assets/spotifyIcon.png")} style={{width: 64}} alt="Spotify Badge" />
							</a>

							<a href='https://twitter.com/brosisshow' target='_blank'>
								<img src={require("../assets/twitterIcon.png")} style={{width: 64}} alt="Spotify Badge" />
							</a>

							<a href='https://instagram.com/brothersistershow' target='_blank'>
								<img src={require("../assets/instaIcon.png")} style={{width: 80}} alt="Spotify Badge" />
							</a>

							<a href='https://discord.gg/QY2BMPeE' target='_blank'>
								<img src={require("../assets/discordIcon")} style={{width: 80}} alt="Spotify Badge" />
							</a>
						</Stack>
                </StackItem>
            </Stack>
        </Stack>        
    )
}
