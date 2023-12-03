import React, { Component } from 'react';
import axios from 'axios';


class MHero extends Component {
    constructor() {
        super();
        this.state = {
            download: false,
            link: "",
            downloadlinkmp3: "",
            downloadlinkmp4: "",
            channel: "",
            title: "",
            thumb: ""

        }
    }
    youtube_parser(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length == 11) ? match[7] : false;
    }
    async convert(e) {
        const id = this.youtube_parser(this.state.link)
        this.setState({ download: true })
        e.preventDefault();


        const options2 = {
            method: 'GET',
            url: 'https://youtube-video-download-info.p.rapidapi.com/dl',
            params: { id: id },
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
                'X-RapidAPI-Host': 'youtube-video-download-info.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options2);
            this.setState({ downloadlinkmp4: response.data.link, title: response.data.title, thumb: response.data.thumb, channel: response.data.author })
            console.log(response.data)
        } catch (error) {
            console.error(error);
        }

    }
    render() {
        const { downloadlinkmp4 } = this.state
        return (
            <section>
                <div className='hero-container'>
                    <div className='mp3-mp4-container'>
                        <h2>Put you're Youtube link here :</h2>
                        <input value={this.state.link} onChange={(e) => this.setState({ link: e.currentTarget.value })} placeholder='https://www.youtube.com/watch?v=something' />
                        <button onClick={(e) => this.convert(e)}>Convert</button>
                        {downloadlinkmp4 != "" ?
                            <div className='download-container'>
                                <h3>Title : <span>{this.state.title}</span> | Channel : <span>{this.state.channel}</span></h3>
                                <img src={this.state.thumb}></img>
                                <h3>Mp4 download Links : </h3>
                                {Object.keys(this.state.downloadlinkmp4).map(function (key, index) {

                                    return (
                                        <div key={index} className='mp4-downloader' style={{ textAlign: "center" }}>
                                            <h3>{(downloadlinkmp4[key][2]).toUpperCase()} :</h3>
                                            <a href={downloadlinkmp4[key][0]} target='_blank' rel='noreferrer'>{downloadlinkmp4[key][3]}</a>
                                        </div>
                                    )
                                })}
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
                                <h3><i className="fa fa-money" aria-hidden="true"></i> Free</h3>
                                <h3><i className="fa fa-fast-forward" aria-hidden="true"></i> Fast</h3>
                            </div>
                            <div>
                                <h3>  <i className="fa fa-check" aria-hidden="true"></i> Easy</h3>
                                <h3><i className="fa fa-shield" aria-hidden="true"></i> Secure</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default MHero;