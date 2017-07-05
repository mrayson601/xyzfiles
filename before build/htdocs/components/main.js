import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import Slider from 'react-slick';

class Main extends Component {

    constructor(props) {
        super(props); 

        this.generatePage = this.generatePage.bind(this);

    }

    generatePage(link) {
        switch (link) {
            case 'about':
                return (
                    <div>
                        <div className="mainTitle">会社概要</div>
                        <hr></hr>
                        <div className="aboutText">
                            <div>新しい時代の覇権を選ばれた国民が得るは、歴史の必然である。</div>
                            <div>我々は過酷な宇宙空間を生活の場としながらも共に苦悩し、</div>
                            <div>錬磨して今日の文化を築き上げてきた。</div>
                            <div>かつて、ジオン・ダイクンは人類の革新は宇宙の民たる我々から始まると言った。</div>
                            <div>しかしながら地球連邦のモグラ共は、</div>
                            <div>自分たちが人類の支配権を有すると増長し我々に抗戦する。</div>
                            <div>諸君の父も、子もその連邦の無思慮な抵抗の前に死んでいったのだ！</div>
                            <div>この悲しみも怒りも忘れてはならない！</div>
                            <div>それを、ガルマは！死をもって我々に示してくれた！</div>
                            <div>我々は今、この怒りを結集し、連邦軍に叩きつけて、初めて真の勝利を得ることができる。</div>
                            <div>この勝利こそ、戦死者全てへの最大の慰めとなる。</div>
                            <div>国民よ立て！悲しみを怒りに変えて、立てよ！国民よ！</div>
                            <div>我らジオン国国民こそ選ばれた民であることを忘れないでほしいのだ。</div>
                            <div>優良種である我らこそ人類を救い得るのである。ジーク・ジオン！</div>
                        </div>
                        <footer>Copyright© XYZ Inc. All Rights Reserved</footer>
                    </div>
                )

            case 'product':
                const settings = {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true
                };
                return (
                    <div>
                        <div className="mainTitle">商品一覧</div>
                        <hr></hr>
                        <div className="productTitle">X Kit Series</div>

                        <Slider {...settings} className="sliderContainer">
                            <div><img className="slide" src={require("../assets/x1.png")}/></div>
                            <div><img className="slide" src={require("../assets/x2.png")}/></div>
                            <div><img className="slide" src={require("../assets/x3.png")}/></div>
                            <div><img className="slide" src={require("../assets/x4.png")}/></div>
                        </Slider>
                        <footer>Copyright© XYZ Inc. All Rights Reserved</footer>

                    </div>
                );
            case 'top':
                return (
                    <div className="bgImage">
                        <div className="blurb1">頭は間違うことがあっても、血は間違わない。</div>
                        <div className="blurb2">中島敦 光と風と夢</div>
                        <div className="blurb3">DNA検査なら、XYZ Inc.</div>

                        <footer>Copyright© XYZ Inc. All Rights Reserved</footer>
                    </div>
                )
            default:
                return (
                    <div>
                        <div className="notFound">404 NOT FOUND</div>

                        <footer>Copyright© XYZ Inc. All Rights Reserved</footer>
                    </div>
                )
        }
    }

    render() {
        return (
            <div className="mainContainer">
                {this.generatePage(this.props.content)}
            </div>
        );
    }
}

export default Main;
