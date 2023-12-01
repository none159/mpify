import React, { Component } from 'react';
import axios from 'axios'
class MHero extends Component {
    constructor() {
        super();
        this.state = {
            download: false,
            link: "",
            downloadlinkmp3: "",
            downloadlinkmp4: "",
            duration: "",
            title: "",

        }
    }
    youtube_parser(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    }
    async convert() {
        const id = this.youtube_parser(this.state.link)
        this.setState({ download: true })

        const options1 = {
            method: 'GET',
            url: 'https://youtube-mp36.p.rapidapi.com/dl',
            params: { id: id },
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
                'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options1);
            console.log(response.data);
            this.setState({ downloadlinkmp3: response.data.link, title: response.data.title, duration: response.data.duration })
        } catch (error) {
            console.error(error);
        }


        const options2 = {
            method: 'GET',
            url: 'https://youtube-video-download-info.p.rapidapi.com/dl',
            params: { id: id },
            headers: {
                'X-RapidAPI-Key': 'e78c98ee35msha781d1bc61c7857p12d10djsn5edc23bf365f',
                'X-RapidAPI-Host': 'youtube-video-download-info.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options2);
            console.log(response.data);
            this.setState({ downloadlinkmp4: response.data.link })
        } catch (error) {
            console.error(error);
        }
    }
    render() {
        return (
            <section>
                <div className='hero-container'>
                    <div className='mp3-mp4-container'>
                        <h2>Put you're Youtube link here :</h2>
                        <input value={this.state.link} onChange={(e) => this.setState({ link: e.currentTarget.value })} placeholder='https://www.youtube.com/watch?v=something' />
                        <button onClick={() => this.convert()}>Convert</button>
                        {this.state.downloadlinkmp3 != "" ?
                            <div>
                                <h3>Title : <span>{this.state.title}</span> / Duration : <span>{(this.state.duration / 60).toFixed(2)}</span></h3>
                                <a href={this.state.downloadlinkmp3} target='_blank' rel='noreferrer'> Download Mp3</a>
                            </div> : ""}
                    </div>
                    <div className='uses'>
                        <h2 id="title">How to use ?</h2>
                        <div>
                            <h2>First Step</h2>
                            <h3>Write or Paste the link in coresponding space. </h3>
                            <h2>Second Step</h2>
                            <h3>Convert to MP3 by clicking on the Convert button.</h3>
                            <h2>Third Step</h2>
                            <h3>Click Download when Converting is Done.</h3>
                        </div>
                    </div>
                    <div className='features'>
                        <h2>Features</h2>
                        <div className='features-container'>
                            <div>
                                <h3><i class="fa fa-money" aria-hidden="true"></i> Free</h3>
                                <h3><i class="fa fa-fast-forward" aria-hidden="true"></i> Fast</h3>
                            </div>
                            <div>
                                <h3>  <i class="fa fa-check" aria-hidden="true"></i> Easy</h3>
                                <h3><i class="fa fa-shield" aria-hidden="true"></i> Secure</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default MHero;