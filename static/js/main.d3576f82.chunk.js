(window["webpackJsonpposts-manager"]=window["webpackJsonpposts-manager"]||[]).push([[0],{214:function(e,t,a){e.exports=a(407)},219:function(e,t,a){},407:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(210),l=a.n(c),i=(a(219),a(21)),o=a(22),s=a(25),u=a(23),y=a(26),m=a(17),p=a(33),d=a(11),h=Object(d.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(m.c,{to:"/create"},"New Post")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(m.c,{to:"/",className:"btn btn-floating pink lighten-1"},"MK")))}),E=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(m.c,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(m.c,{to:"/signin"},"Login")))},b=Object(d.b)(function(e){return console.log("Navbar state",e),{auth:e.firebase.auth}})(function(e){var t=e.auth.uid?r.a.createElement(h,null):r.a.createElement(E,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(m.b,{to:"/",className:"brand-logo"},"Posts Manager"),t))}),f=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Notifications"))},g=function(e){var t=e.post;return r.a.createElement("div",{className:"card z-depth-0 post-summery"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title",key:t.id},t.title),r.a.createElement("p",null,"Posted by you"),r.a.createElement("p",{className:"grey-text"},"3rd August, 2am")))},O=function(e){var t=e.posts;return r.a.createElement("div",{className:"posts-list section"},t&&t.map(function(e){return r.a.createElement(m.b,{to:"/post/"+e.id,key:e.id},r.a.createElement(g,{post:e}))}))},v=a(16),N=a(28),j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.posts;return r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(O,{posts:e})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(f,null))))}}]),t}(n.Component),w=Object(v.d)(Object(d.b)(function(e){return console.log(e),{posts:e.firestore.ordered.posts}}),Object(N.firestoreConnect)([{collection:"posts"}]))(j),S=Object(v.d)(Object(d.b)(function(e,t){var a=t.match.params.post_id,n=e.firestore.data.posts;return{post:n?n[a]:null}}),Object(N.firestoreConnect)([{collection:"posts"}]))(function(e){var t=e.post;return t?r.a.createElement("div",{className:"container section post-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.authFirstName," ",t.authLastName),r.a.createElement("div",null,"2nd September, 2am")))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading post..."))}),C=a(24),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(C.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(y.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.authError;return r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},e?r.a.createElement("p",null,e):null))))}}]),t}(n.Component),P=Object(d.b)(function(e){return{authError:e.auth.authError}},function(e){return{signIn:function(t){return e(function(e){return function(t,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(e.email,e.password).then(function(){t({type:"LOGIN_SUCCESS"})}).catch(function(e){t({type:"LOGIN_ERROR",err:e})})}}(t))}}})(x),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(C.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state)},a}return Object(y.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Last Name"),r.a.createElement("input",{type:"text",id:"Last Name",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"))))}}]),t}(n.Component);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var R=function(e){return function(t,a,n){n.getFirebase;(0,n.getFirestore)().collection("posts").add(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(a,!0).forEach(function(t){Object(C.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{authFirstName:"VVV",authLastName:"SSSSS",authId:12345,createdAt:new Date})).then(function(e){t({type:"CREATE_POST",post:e})}).catch(function(e){t({type:"CREATE_POST_ERR",err:e})})}},I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(C.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createPost(a.state)},a}return Object(y.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create new post"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Post content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create"))))}}]),t}(n.Component),A=Object(d.b)(null,function(e){return{createPost:function(t){return e(R(t))}}})(I),L=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:w}),r.a.createElement(p.a,{path:"/signin",component:P}),r.a.createElement(p.a,{path:"/signup",component:k}),r.a.createElement(p.a,{path:"/create",component:A}),r.a.createElement(p.a,{path:"/post/:post_id",component:S}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach(function(t){Object(C.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var T={authError:null},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return D({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("Login success"),D({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;default:return e}},z={posts:[{id:"1",title:"xxxx",content:"yyyyyyyyyyyyy yyyyyyyyyyy yyyyyyyyyyyyyyy yyyyyyyyyyyyyyyy"},{id:"2",title:"xxxx",content:"yyyyyyyyyyyyy yyyyyyyyyyy yyyyyyyyyyyyyyy yyyyyyyyyyyyyyyy"},{id:"3",title:"xxxx",content:"yyyyyyyyyyyyy yyyyyyyyyyy yyyyyyyyyyyyyyy yyyyyyyyyyyyyyyy"}]},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_POST":return console.log("created post",t.post),e;case"CREATE_POST_ERR":return console.log("created post error",t.err),e;default:return e}},V=a(62),B=Object(v.c)({auth:U,post:G,firestore:V.firestoreReducer,firebase:N.firebaseReducer}),Q=a(213),W=a(133),J=a.n(W);a(402),a(405);J.a.initializeApp({apiKey:"AIzaSyC1HduecZdrc4_-5XnQ9OQR7ug5GouVoAQ",authDomain:"posts-manager-app.firebaseapp.com",databaseURL:"https://posts-manager-app.firebaseio.com",projectId:"posts-manager-app",storageBucket:"posts-manager-app.appspot.com",messagingSenderId:"389730848597",appId:"1:389730848597:web:12be279914396555"});var K=J.a,M=Object(v.e)(B,Object(v.d)(Object(v.a)(Q.a.withExtraArgument({getFirebase:N.getFirebase,getFirestore:V.getFirestore})),Object(V.reduxFirestore)(K),Object(N.reactReduxFirebase)(K)));l.a.render(r.a.createElement(d.a,{store:M},r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[214,1,2]]]);
//# sourceMappingURL=main.d3576f82.chunk.js.map