(this["webpackJsonpmovies-tarantino"]=this["webpackJsonpmovies-tarantino"]||[]).push([[0],{52:function(e,t,a){},53:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(25),i=a.n(c),r=(a(52),a(8)),o=a(9),l=a(11),d=a(10),j=(a(53),a(54),a(92)),h="4b05d1f33354eefeaacd118430618d8f",m="https://m.media-amazon.com/images/M/MV5BMTgyMjI3ODA3Nl5BMl5BanBnXkFtZTcwNzY2MDYxOQ@@._V1_.jpg",u=a(1),b=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).get5TopMovies=function(){(function(e){var t="";for(var a in e)t+="&"+a+"="+e[a];return fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat(h,"&language=en-US&with_crew=138").concat(t)).then((function(e){return e.json()}))})({sort_by:"popularity.desc"}).then((function(e){for(var t=e.results.filter((function(e){return e.backdrop_path})),a=[],s=0;s<5;s++)a.push(n.createMovieCarouslItem(t[s])),n.setState({topMovies:a})}))},n.createMovieCarouslItem=function(e){return Object(u.jsxs)(j.a.Item,{children:[Object(u.jsx)("img",{className:"d-block images",src:"https://www.themoviedb.org/t/p/w1280".concat(e.backdrop_path),alt:"Second slide"}),Object(u.jsxs)(j.a.Caption,{children:[Object(u.jsx)("h3",{children:e.title}),Object(u.jsx)("p",{children:e.overview})]})]})},n.state={topMovies:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.get5TopMovies()}},{key:"render",value:function(){return Object(u.jsx)(j.a,{children:this.state.topMovies})}}]),a}(s.a.Component),p=a(35),g=a.n(p),O=(a(76),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){var e="300px",t="210px",a=this.props.color||"#f47a11",n="https://image.tmdb.org/t/p/w500/"+this.props.movDetails.movImgSrc,s=this.props.movDetails.movName,c=this.props.movDetails.movRate,i=this.props.movDetails.movYear,r=this.props.movDetails.movLink;return Object(u.jsx)("div",{children:Object(u.jsxs)(g.a,{flipOnHover:!0,flipOnClick:!1,flipDirection:"horizontal",className:"mov-card",style:{height:e,width:t},children:[Object(u.jsxs)(p.FrontSide,{style:{height:e,width:t,backgroundColor:a},children:[Object(u.jsx)("div",{style:{height:"85%"},children:Object(u.jsx)("img",{src:n,alt:""})}),Object(u.jsx)("p",{children:s}),Object(u.jsx)("div",{className:"card-mov-info",style:{backgroundColor:a,left:"7px"},children:i}),Object(u.jsx)("div",{className:"card-mov-info",style:{backgroundColor:a,right:"7px"},children:"\u2b50".concat(c)})]}),Object(u.jsx)(p.BackSide,{style:{height:e,width:t,backgroundColor:a},children:Object(u.jsxs)("a",{href:"#/movie/".concat(r),children:[Object(u.jsx)("div",{style:{height:"85%"},children:Object(u.jsx)("img",{src:n,alt:"",style:{opacity:"0.6"}})}),Object(u.jsx)("p",{children:s}),Object(u.jsx)("button",{className:"detailed-button",style:{backgroundColor:a},children:"Details"})]})})]})})}}]),a}(s.a.Component)),f=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.cards.map((function(e){return Object(u.jsx)("div",{style:{margin:"20px"},children:Object(u.jsx)(O,{movDetails:e})})}));return Object(u.jsx)("div",{className:"container",style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},children:e})}}]),a}(s.a.Component),v=(a(77),a(95)),x=(a(78),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).choosePage=function(e){n.props.choosePage(e)},n.firstPage=function(){n.props.choosePage(1)},n.prevPage=function(){var e=n.props.currentPage;e<=1||n.props.choosePage(parseInt(e-1))},n.nextPage=function(){var e=n.props.currentPage;e>=n.props.numOfPages||n.props.choosePage(parseInt(e+1))},n.lastPage=function(){n.props.choosePage(n.props.numOfPages)},n}return Object(o.a)(a,[{key:"render",value:function(){for(var e=this,t=this.props.currentPage>2?Object(u.jsx)(v.a.First,{firstLabel:"",onClick:this.firstPage}):null,a=this.props.currentPage>1?Object(u.jsx)(v.a.Prev,{onClick:this.prevPage}):null,n=this.props.currentPage<this.props.numOfPages?Object(u.jsx)(v.a.Next,{onClick:this.nextPage}):null,s=this.props.currentPage<this.props.numOfPages-1?Object(u.jsx)(v.a.Last,{onClick:this.lastPage}):null,c=[],i=this.props.currentPage,r=this.props.numOfPages,o=0,l=i==r?i-2:i-1;o<3&&l<=r;)l>0&&(o++,c.push(l)),l++;return console.log(c),Object(u.jsx)("div",{className:"paginator-container",children:Object(u.jsxs)(v.a,{className:"paginator-el",children:[t,a,c.map((function(t){return Object(u.jsx)(v.a.Item,{activeLabel:"",active:t===e.props.currentPage,onClick:function(){return e.choosePage(t)},children:t},t)})),n,s]})})}}]),a}(s.a.Component)),w=a(88),y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.getMovies(1)},n.getMovies=function(e){fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat(h,"&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=").concat(e,"&with_people=").concat(138,"&with_watch_monetization_types=flatrate")).then((function(e){return e.json()})).then((function(e){e.page;var t=e.results.map((function(e){return{movName:e.title,movImgSrc:e.poster_path,movRate:e.vote_average,movYear:e.release_date,movLink:e.id}}));n.setState({cards:t,numOfPages:e.total_pages})}))},n.choosePage=function(e){n.setState({pageNum:e}),n.getMovies(e)},n.state={cards:[],pageNum:1,numOfPages:""},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"p-home",children:[Object(u.jsx)("div",{className:"jumbotron",children:Object(u.jsxs)("div",{class:"header-text-wrapper",children:[Object(u.jsx)("h1",{className:"display-4 mx-3",children:"Quentin Tarantino"}),Object(u.jsx)("hr",{className:"my-4"}),Object(u.jsx)("p",{className:"lead t-quote mx-3",children:"I want to risk hitting my head on the ceiling of my talent. I want to really test it out and say: Ok you\u2019re not that good. You just reached the level here. I don\u2019t ever want to fail, but I want to risk failure every time out of the gate"}),Object(u.jsx)("img",{className:"tarantino-img",src:"/best-movies-app/t.png",alt:"Logo"})]})}),Object(u.jsx)("div",{className:"float-me-right"}),Object(u.jsxs)(w.a,{children:[Object(u.jsx)("div",{className:"custom-courusel",children:Object(u.jsx)(b,{})}),Object(u.jsx)("div",{className:"custom-gallery",children:Object(u.jsx)(f,{cards:this.state.cards})}),Object(u.jsx)("div",{className:"custom-paginator",children:Object(u.jsx)(x,{choosePage:this.choosePage,currentPage:this.state.pageNum,numOfPages:this.state.numOfPages})})]})]})}}]),a}(s.a.Component),N=a(89),k=a(90),M=a(46),T=(a(79),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)(w.a,{className:"p-about",children:[Object(u.jsxs)(N.a,{className:"about-jumbo",children:[Object(u.jsx)("h1",{children:"Quentin Tarantino"}),Object(u.jsx)("p",{className:"lead",children:"Writer, Actor and Producer"}),Object(u.jsx)("hr",{class:"my-4"})]}),Object(u.jsxs)("main",{className:"about-text",children:[Object(u.jsx)("p",{children:"Quentin Jerome Tarantino was born in Knoxville, Tennessee. His father, Tony Tarantino, is an Italian-American actor and musician from New York, and his mother, Connie (McHugh), is a nurse from Tennessee. Quentin moved with his mother to Torrance, California, when he was four years old."}),Object(u.jsx)("p",{children:"In January of 1992, first-time writer-director Tarantino's Calbay Ashmoret (1992) appeared at the Sundance Film Festival. The film garnered critical acclaim and the director became a legend immediately. Two years later, he followed up Dogs success with Sifrut Zolla (1994) which premiered at the Cannes film festival, winning the coveted Palme D'Or Award. At the 1995 Academy Awards, it was nominated for the best picture, best director and best original screenplay. Tarantino and writing partner Roger Avary came away with the award only for best original screenplay. In 1995, Tarantino directed one fourth of the anthology Araba'a Hadarim (1995) with friends and fellow auteurs Alexandre Rockwell, Robert Rodriguez and Allison Anders. The film opened December 25 in the United States to very weak reviews. Tarantino's next film was From Dusk Till Dawn (1996), a vampire/crime story which he wrote and co-starred with George Clooney. The film did fairly well theatrically."}),Object(u.jsx)("p",{children:"Since then, Tarantino has helmed several critically and financially successful films, including Jackie Brown (1997), Kill Bill: Vol. 1 (2003), Kill Bill: Vol. 2 (2004), Mamzerim Chasere Kavod (2009), Django Lelo Ma'atzorim (2012) and Shmonat ha'snou'im (2015)."})]}),Object(u.jsxs)(k.a,{className:"gallery-qt",children:[Object(u.jsx)("img",{src:"https://m.media-amazon.com/images/M/MV5BMTgyMjI3ODA3Nl5BMl5BanBnXkFtZTcwNzY2MDYxOQ@@._V1_.jpg"}),Object(u.jsx)("img",{src:"https://www.madametussauds.com/wien/media/kjpavjjg/quentin-tarantino2-min.jpg"}),Object(u.jsx)("img",{src:"https://www.dailysquat.com/wp-content/uploads/2021/04/quentin-tarantino-athletes-mouth.jpg"}),Object(u.jsx)("img",{src:"https://s.studiobinder.com/wp-content/uploads/2019/09/Quentin-Tarantinos-Star-Trek-Featured-StudioBinder.jpg"}),Object(u.jsx)("img",{src:"https://consequence.net/wp-content/uploads/2019/07/quentin-tarantino-lines.png"}),Object(u.jsx)("img",{src:"https://www.jpost.com//HttpHandlers/ShowImage.ashx?id=387175&w=640&h=428"})]}),Object(u.jsxs)(k.a,{className:"more-info justify-content-center",children:[Object(u.jsx)(M.a,{children:Object(u.jsx)("a",{href:"https://en.wikipedia.org/wiki/Quentin_Tarantino",target:"_blank",children:"Wikipedia"})}),Object(u.jsx)(M.a,{children:Object(u.jsx)("a",{href:"https://www.imdb.com/name/nm0000233/",target:"_blank",children:"QT at IMDb"})}),Object(u.jsx)(M.a,{children:Object(u.jsx)("a",{href:"https://www.rottentomatoes.com/celebrity/quentin_tarantino",target:"_blank",children:"QT at Rotten Tomatoes"})})]})]})}}]),a}(s.a.Component)),I=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{children:"AdvancedSearch"})}}]),a}(s.a.Component),S=a(7),C=(a(80),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.props.toggleSpinner(!0),fetch("https://api.themoviedb.org/3/movie/".concat(n.id,"?api_key=").concat(h,"&language=en-US&append_to_response=videos")).then((function(e){return e.json()})).then((function(e){var t=e.imdb_id,a={title:e.original_title,image:e.poster_path?e.poster_path:m,tmdbRaiting:e.vote_average,tagline:e.tagline,trailer:e.videos&&e.videos.results[0]&&e.videos.results[0].key?e.videos.results[0].key:"6V1Sm0WCtHU"};return console.log(a),n.setState({tmdbInfo:a}),t})).then((function(e){fetch("http://www.omdbapi.com/?apikey=".concat("de97b29a","&i=").concat(e)).then((function(e){return e.json()})).then((function(e){var t={actors:e.Actors?e.Actors:"unknown",writer:e.Writer?e.Writer:"unknown",director:e.Director?e.Director:"unknown",rottenTomatoes:e.Ratings&&e.Ratings[1]&&e.Ratings[1].Value?e.Ratings[1].Value:"No raiting",imdbRating:e.imdbRating,metacritic:e.Ratings&&e.Ratings[2]&&e.Ratings[2].Value?e.Ratings[2].Value:"No raiting",genres:e.Genre?e.Genre:"unknown",language:e.Language?e.Language:"unknown",plot:e.Plot,year:e.Year?e.Year:"unknown",runTime:e.Runtime?e.Runtime:"unknown"};n.props.toggleSpinner(!1),n.setState({omdbInfo:t})}))}))},n.id=n.props.match.params.id,n.state={tmdbInfo:{},omdbInfo:{}},n}return Object(o.a)(a,[{key:"render",value:function(){var e="";return e=void 0===this.state.tmdbInfo||void 0===this.state.omdbInfo?Object(u.jsx)("div",{children:"loading"}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"jumbotron",children:[Object(u.jsx)("h1",{className:"display-3 text-center",children:this.state.tmdbInfo.title}),Object(u.jsx)("p",{className:"display-6 text-center",children:this.state.tmdbInfo.tagline}),Object(u.jsx)("hr",{className:"my-3"}),Object(u.jsxs)("p",{className:" lead text-center",children:["Directed by: ",this.state.omdbInfo.director," "]})]}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)(k.a,{children:[Object(u.jsx)(M.a,{lg:6,className:"text-center",children:Object(u.jsx)("img",{src:"https://image.tmdb.org/t/p/w400".concat(this.state.tmdbInfo.image),alt:this.state.tmdbInfo.title})}),Object(u.jsx)(M.a,{lg:6,children:Object(u.jsxs)("dl",{className:"row",children:[Object(u.jsx)("dt",{className:"col-sm-3",children:"Genres:"}),Object(u.jsx)("dd",{className:"col-sm-9",children:this.state.omdbInfo.genres}),Object(u.jsx)("dt",{className:"col-sm-3",children:"About:"}),Object(u.jsx)("dd",{className:"col-sm-9",children:Object(u.jsx)("p",{children:this.state.omdbInfo.plot})}),Object(u.jsx)("dt",{className:"col-sm-3",children:"Runtime: "}),Object(u.jsx)("dd",{className:"col-sm-9",children:this.state.omdbInfo.runTime}),Object(u.jsx)("dt",{className:"col-sm-3",children:"Writers: "}),Object(u.jsx)("dd",{className:"col-sm-9",children:this.state.omdbInfo.writer}),Object(u.jsx)("dt",{className:"col-sm-3",children:"Actors: "}),Object(u.jsx)("dd",{className:"col-sm-9",children:this.state.omdbInfo.actors}),Object(u.jsx)("dt",{className:"col-sm-3",children:"Language: "}),Object(u.jsx)("dd",{className:"col-sm-9",children:this.state.omdbInfo.language}),Object(u.jsx)("dt",{className:"col-sm-3",children:"Year: "}),Object(u.jsx)("dd",{className:"col-sm-9",children:this.state.omdbInfo.year}),Object(u.jsx)("dt",{className:"col-sm-3",children:"Raitings"}),Object(u.jsxs)("dd",{className:"col-sm-9",children:[Object(u.jsxs)("dl",{className:"row",children:[Object(u.jsx)("dt",{className:"col-sm-4",children:"IMDB:"}),Object(u.jsx)("dd",{className:"col-sm-8",children:this.state.tmdbInfo.tmdbRaiting})]}),Object(u.jsxs)("dl",{className:"row",children:[Object(u.jsx)("dt",{className:"col-sm-4",children:"TMDB:"}),Object(u.jsx)("dd",{className:"col-sm-8",children:this.state.omdbInfo.imdbRating})]}),Object(u.jsxs)("dl",{className:"row",children:[Object(u.jsx)("dt",{className:"col-sm-4",children:"Rotten Tomatoes:"}),Object(u.jsx)("dd",{className:"col-sm-8",children:this.state.omdbInfo.rottenTomatoes})]}),Object(u.jsxs)("dl",{className:"row",children:[Object(u.jsx)("dt",{className:"col-sm-4",children:"Metacritic:"}),Object(u.jsx)("dd",{className:"col-sm-8",children:this.state.omdbInfo.metacritic})]})]})]})})]}),Object(u.jsx)(k.a,{children:Object(u.jsxs)("div",{className:"text-center mt-5 iframe-container",children:[Object(u.jsx)("h5",{children:"Trailer"}),Object(u.jsx)("iframe",{width:"1280",height:"720",src:"https://www.youtube.com/embed/".concat(this.state.tmdbInfo.trailer),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})})]})]}),Object(u.jsx)("div",{className:"p-movie",children:e})}}]),a}(s.a.Component)),_=Object(S.f)(C),P=a(28),D=a(93),R=a(94),B=(a(84),a(41)),L=a(96),A=a(91),F=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).getMoviesList=function(){fetch("https://api.themoviedb.org/3/person/".concat(138,"/movie_credits?api_key=").concat(h)).then((function(e){return e.json()})).then((function(e){if(e&&e.crew&&e.cast){var t={},a=[].concat(Object(B.a)(e.cast),Object(B.a)(e.crew)).filter((function(e){return!t[e.original_title]&&(t[e.original_title]=!0,!0)})).map((function(e){return{name:e.original_title,id:e.id,poster:e.poster_path,release_date:e.release_date,popularity:e.popularity}}));n.setState({resultTMDB:a})}}))},n.onSearchChanged=function(e){var t=n.state.resultTMDB.filter((function(t){return t.name.toLocaleLowerCase().includes(e.toLocaleLowerCase())})),a=[];if(t){for(var s=0;s<10&&s<t.length;s++)a.push(n.createMovieTab(t[s]));n.setState({value:e,filteredMovies:a})}},n.createMovieTab=function(e){var t;return t=e.poster?"https://www.themoviedb.org/t/p/w500".concat(e.poster):m,Object(u.jsx)(L.a.Item,{action:!0,onClick:function(){n.onResultSelected(e.id,e.name)},children:Object(u.jsxs)("div",{className:"movie-tab",children:[Object(u.jsx)("img",{className:"image-tab",src:t}),Object(u.jsx)("div",{className:"movie-name-tab",children:e.name})]})},e.id)},n.onResultSelected=function(e,t){n.setState({name:"",filteredMovies:""}),window.location.href="#movie/".concat(e)},n.state={resultTMDB:[],filteredMovies:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getMoviesList()}},{key:"render",value:function(){var e=this;return Object(u.jsxs)(A.a.Group,{children:[Object(u.jsx)(A.a.Control,{type:"text",value:this.state.value,placeholder:"Search for a movie",onChange:function(t){e.onSearchChanged(t.target.value)}}),Object(u.jsx)(L.a,{className:"movies-search",onMouseLeave:function(){return e.setState({filteredMovies:"",value:""})},children:this.state.filteredMovies})]})}}]),a}(s.a.Component),Y=Object(S.f)(F),V=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)(D.a,{bg:"dark",variant:"dark",expand:"lg",className:"movies-navbar",children:[Object(u.jsx)(D.a.Brand,{href:"#/",children:Object(u.jsx)("img",{className:"logo",src:"/best-movies-applogo.jpg",alt:"Logo"})}),Object(u.jsx)(D.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsxs)(D.a.Collapse,{id:"basic-navbar-nav",children:[Object(u.jsx)(R.a,{children:Object(u.jsx)(R.a.Link,{href:"#/about",children:"About"})}),Object(u.jsx)(R.a,{className:"left-nav",children:Object(u.jsx)(R.a.Link,{children:Object(u.jsx)(Y,{})})})]})]})}}]),a}(s.a.Component);function Q(){var e=Object(S.e)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var z=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).toggleSpinner=function(e){n.setState({showSpinner:e})},n.state={showSpinner:!1},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)(P.a,{children:[Object(u.jsx)(Q,{}),Object(u.jsx)(V,{}),Object(u.jsx)(S.a,{exact:!0,path:"/",children:Object(u.jsx)(y,{toggleSpinner:this.toggleSpinner})}),Object(u.jsx)(S.a,{exact:!0,path:"/about",children:Object(u.jsx)(T,{})}),Object(u.jsx)(S.a,{exact:!0,path:"/advanced-search",children:Object(u.jsx)(I,{})}),Object(u.jsx)(S.a,{exact:!0,path:"/movie/:id",children:Object(u.jsx)(_,{toggleSpinner:this.toggleSpinner})})]})}}]),a}(s.a.Component),q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,97)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(z,{})}),document.getElementById("root")),q()}},[[86,1,2]]]);
//# sourceMappingURL=main.ad64e0bd.chunk.js.map