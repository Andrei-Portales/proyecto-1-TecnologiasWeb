import React from 'react';
import './MovieListVideo.scss';
import PlayButtonIcon from '../../assets/icons/play-button-arrowhead.svg';
import plusIcon from '../../assets/icons/plus.svg';
import infoIcon from '../../assets/icons/information.svg';

const movieListVideo = () => (
  <div className="container-video-list">
    <div>
      <div className="title-avances">
        <div className="prime">prime</div>
        <div className="avances">Avances para ti</div>
      </div>

      <div className="subtitle-avances">
        Seleccionado para ti en funcion de lo que has visto
      </div>
    </div>

    <div className="video-container">
      <div className="bubble-video-options">
        <div
          className="avance-info"
          style={{
           /* backgroundImage:
              "url('https://i.ytimg.com/vi/F_lGmkZQ-yk/maxresdefault.jpg')",
            objectFit: 'fill',*/
          }}
        >
          {/* <div className="image-preview">
              <img src="https://i.ytimg.com/vi/F_lGmkZQ-yk/maxresdefault.jpg"></img>
  </div> */}

          <div className="info-content">
            <div className="title-movie">El ultimo cazador de brujas</div>

          

            <div>
              <div className="info-buttons">
                <div className="play-container">
                  <img src={PlayButtonIcon} alt="play button" />
                  <div>Reproducir</div>
                </div>

                <div className="add-button-info">
                  <img src={plusIcon} alt="plus icon" />
                </div>

                <div className="add-button-info">
                  <img src={infoIcon} alt="info button" />
                </div>
              </div>

              <div className="clasificacion-title">Ciencia ficcion</div>
            </div>
          </div>
        </div>

        <div className="avance-video">
          <video
            controls
            poster="https://i.ytimg.com/vi/F_lGmkZQ-yk/maxresdefault.jpg"
            muted
          >
            <source
              src="https://s3-iad-2.cf.trailer.row.aiv-cdn.net/2bb6/dc85/deb8/4b0a-b4f7-9a2df0a1c3ed/063345b0-1cb4-4e5f-ae42-dde17b414ac4_video_6000_audio_aaclc_128.mp4?Expires=1618227895&Signature=Ap8mfh58XiED0hQpuHPIMKpse5B4G7Kq17QhePE6sy7~vB37gsDzPXFmV3WmA6jLJpyOFi7esO9uXj5Jnuyn0rkCPFzQww3PEcjwUb~vQgA3gUtZek9a~tWHOWB0OUsEAqLRsbLMOlsb8iyWRBJ2Y~mwCJf-VGxYstd22dFCxCW~9GMZXf8yFBhBuyFbI9px2tWL2FYkSGthYn22~tFlCun0UPZrrvCCh5auwBqWauac2CaKsbiTSIyHNfTIXSwKUDIX-t7DMSoCEVRylwFpHPb~Aoc-Bg2oMejthfwRrDo8-eCbJIHgLcUkPW2iWo69a8W8gw0N-jql2G0xgkDJdw__&Key-Pair-Id=APKAJIYEUF5P2E3CCYTA"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  </div>
);

export default movieListVideo;
