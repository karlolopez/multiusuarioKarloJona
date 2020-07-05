(this["webpackJsonpreact-redux-registration-login-example"]=this["webpackJsonpreact-redux-registration-login-example"]||[]).push([[0],{38:function(e,t,a){e.exports=a(53)},53:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(30),s=a(8);a(37),JSON.parse(localStorage.getItem("users"));var l=a(7),c=Object(l.a)(),A=a(14),i=a(33),u=a.n(i),m=a(34),h="ALERT_SUCCESS",g="ALERT_ERROR",d="ALERT_CLEAR",E="USERS_REGISTER_REQUEST",f="USERS_REGISTER_SUCCESS",p="USERS_REGISTER_FAILURE",b="USERS_LOGIN_REQUEST",S="USERS_LOGIN_SUCCESS",v="USERS_LOGIN_FAILURE",C="USERS_LOGOUT",w="USERS_GETALL_REQUEST",O="USERS_GETALL_SUCCESS",I="USERS_GETALL_FAILURE",j="USERS_DELETE_REQUEST",y="USERS_DELETE_SUCCESS",N="USERS_DELETE_FAILURE";var Q=a(18),R=a(5);var U=Object(A.c)({registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return{registering:!0};case f:case p:return{};default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{loading:!0};case O:return{items:t.users};case I:return{error:t.error};case j:return Object(R.a)(Object(R.a)({},e),{},{items:e.items.map((function(e){return e.id===t.id?Object(R.a)(Object(R.a)({},e),{},{deleting:!0}):e}))});case y:return{items:e.items.filter((function(e){return e.id!==t.id}))};case N:return Object(R.a)(Object(R.a)({},e),{},{items:e.items.map((function(e){if(e.id===t.id){e.deleting;var a=Object(Q.a)(e,["deleting"]);return Object(R.a)(Object(R.a)({},a),{},{deleteError:t.error})}return e}))});default:return e}},alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{type:"alert-success",message:t.message};case g:return{type:"alert-danger",message:t.message};case d:return{};default:return e}}}),G=Object(m.createLogger)(),k=Object(A.d)(U,Object(A.a)(u.a,G));function D(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}var M=a(9),T=a(10),J=a(12),L=a(11),B=a(6),K={success:function(e){return{type:h,message:e}},error:function(e){return{type:g,message:e}},clear:function(){return{type:d}}};var Y={login:function(e,t){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})};return fetch("/users/authenticate",a).then(F).then((function(e){return localStorage.setItem("user",JSON.stringify(e)),e}))},logout:H,register:function(e){var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("/users/register",t).then(F)},getAll:function(){var e={method:"GET",headers:D()};return fetch("/users",e).then(F)},getById:function(e){var t={method:"GET",headers:D()};return fetch("/users/".concat(e),t).then(F)},update:function(e){var t={method:"PUT",headers:Object(R.a)(Object(R.a)({},D()),{},{"Content-Type":"application/json"}),body:JSON.stringify(e)};return fetch("/users/".concat(e.id),t).then(F)},delete:function(e){var t={method:"DELETE",headers:D()};return fetch("/users/".concat(e),t).then(F)}};function H(){localStorage.removeItem("user")}function F(e){return e.text().then((function(t){var a=t&&JSON.parse(t);if(!e.ok){401===e.status&&H();var r=a&&a.message||e.statusText;return Promise.reject(r)}return a}))}var x={login:function(e,t){return function(a){a({type:b,user:{username:e}}),Y.login(e,t).then((function(e){a(function(e){return{type:S,user:e}}(e)),c.push("/")}),(function(e){a(function(e){return{type:v,error:e}}(e)),a(K.error(e))}))}},logout:function(){return Y.logout(),{type:C}},register:function(e){return function(t){t(function(e){return{type:E,user:e}}(e)),Y.register(e).then((function(e){t(function(e){return{type:f,user:e}}()),c.push("/login"),t(K.success("Registration successful"))}),(function(e){t(function(e){return{type:p,error:e}}(e)),t(K.error(e))}))}},getAll:function(){return function(e){e({type:w}),Y.getAll().then((function(t){return e(function(e){return{type:O,users:e}}(t))}),(function(t){return e(function(e){return{type:I,error:e}}(t))}))}},delete:function(e){return function(t){t(function(e){return{type:j,id:e}}(e)),Y.delete(e).then((function(a){t(function(e){return{type:y,id:e}}(e))}),(function(a){t(function(e,t){return{type:N,id:e,error:t}}(e,a))}))}}};var _=function(e){var t=e.component,a=Object(Q.a)(e,["component"]);return n.a.createElement(B.c,Object.assign({},a,{render:function(e){return localStorage.getItem("user")?n.a.createElement(t,e):n.a.createElement(B.b,{to:{pathname:"/login",state:{from:e.location}}})}}))},P=function(e){Object(J.a)(a,e);var t=Object(L.a)(a);function a(e){var r;return Object(M.a)(this,a),r=t.call(this,e),void 0!==localStorage.getItem("user")&&null!==localStorage.getItem("user")&&""!==localStorage.getItem("user")||(window.location.href="/login"),r}return Object(T.a)(a,[{key:"componentDidMount",value:function(){}},{key:"handleDeleteUser",value:function(e){var t=this;return function(a){return t.props.deleteUser(e)}}},{key:"render",value:function(){this.props.users;var e={};return localStorage.getItem("user")&&(e=JSON.parse(localStorage.getItem("user")),console.log(e)),n.a.createElement("div",{className:"col-md-6 col-md-offset-3"},n.a.createElement("h1",null,"Hola ",e.nombre,"!"),n.a.createElement("p",null,"Te has logeado correctamente"),n.a.createElement("h3",null,"Gracias por estar aqu\xed!"),n.a.createElement("p",null,n.a.createElement("button",{onClick:function(){window.location.href="/login",localStorage.removeItem("user")}},"Salir")))}}]),a}(n.a.Component);var W={getUsers:x.getAll,deleteUser:x.delete},z=Object(s.b)((function(e){return{}}),W)(P),V=a(15),Z=a(13),q=function(e){Object(J.a)(a,e);var t=Object(L.a)(a);function a(e){var r;return Object(M.a)(this,a),r=t.call(this,e),void 0!==localStorage.getItem("user")&&null!==localStorage.getItem("user")&&""!==localStorage.getItem("user")&&(window.location.href="/"),r.state={username:"",password:"",submitted:!1},r.handleChange=r.handleChange.bind(Object(Z.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(Z.a)(r)),r}return Object(T.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,r=t.value;this.setState(Object(V.a)({},a,r))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state,a=t.username,r=t.password;if(a&&r){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({correo:a,clave:r})};fetch("http://192.168.1.70:3000",n).then((function(e){return e.json()})).then((function(e){"success"==e.status?(localStorage.setItem("user",JSON.stringify(e)),window.location.href="/"):alert(e.message)}))}}},{key:"render",value:function(){var e=this.props.loggingIn,t=this.state,a=t.username,r=t.password,o=t.submitted;return n.a.createElement("div",{className:"col-md-6 col-md-offset-3"},n.a.createElement("h2",null,"Login"),n.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},n.a.createElement("div",{className:"form-group"+(o&&!a?" has-error":"")},n.a.createElement("label",{htmlFor:"username"},"Correo"),n.a.createElement("input",{type:"text",className:"form-control",name:"username",value:a,onChange:this.handleChange}),o&&!a&&n.a.createElement("div",{className:"help-block"},"El correo es necesario.")),n.a.createElement("div",{className:"form-group"+(o&&!r?" has-error":"")},n.a.createElement("label",{htmlFor:"password"},"Contrase\xf1a"),n.a.createElement("input",{type:"password",className:"form-control",name:"password",value:r,onChange:this.handleChange}),o&&!r&&n.a.createElement("div",{className:"help-block"},"La contrase\xf1a es necesaria")),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{className:"btn btn-primary"},"Entrar"),e&&n.a.createElement("img",{src:"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="}),n.a.createElement(B.a,{to:"/register",className:"btn btn-link"},"Registrar"))))}}]),a}(n.a.Component);var X={login:x.login,logout:x.logout},$=Object(s.b)((function(e){return{}}),X)(q),ee=function(e){Object(J.a)(a,e);var t=Object(L.a)(a);function a(e){var r;return Object(M.a)(this,a),r=t.call(this,e),void 0!==localStorage.getItem("user")&&null!==localStorage.getItem("user")&&""!==localStorage.getItem("user")&&(window.location.href="/"),r.state={user:{firstName:"",lastName:"",username:"",password:""},submitted:!1},r.handleChange=r.handleChange.bind(Object(Z.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(Z.a)(r)),r}return Object(T.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,r=t.value,n=this.state.user;this.setState({user:Object(R.a)(Object(R.a)({},n),{},Object(V.a)({},a,r))})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state.user;if(t.firstName&&t.lastName&&t.username&&t.password){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({correo:t.username,clave:t.password,nombre:t.firstName,apellido:t.lastName})};fetch("http://192.168.1.70:3000/createUser",a).then((function(e){return e.json()})).then((function(e){alert(e.message),window.location.href="/login"}))}}},{key:"render",value:function(){var e=this.props.registering,t=this.state,a=t.user,r=t.submitted;return n.a.createElement("div",{className:"col-md-6 col-md-offset-3"},n.a.createElement("h2",null,"Registro"),n.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},n.a.createElement("div",{className:"form-group"+(r&&!a.firstName?" has-error":"")},n.a.createElement("label",{htmlFor:"firstName"},"Nombre"),n.a.createElement("input",{type:"text",className:"form-control",name:"firstName",value:a.firstName,onChange:this.handleChange}),r&&!a.firstName&&n.a.createElement("div",{className:"help-block"},"El nombre es requerido")),n.a.createElement("div",{className:"form-group"+(r&&!a.lastName?" has-error":"")},n.a.createElement("label",{htmlFor:"lastName"},"Apellido"),n.a.createElement("input",{type:"text",className:"form-control",name:"lastName",value:a.lastName,onChange:this.handleChange}),r&&!a.lastName&&n.a.createElement("div",{className:"help-block"},"El apellido es requerido.")),n.a.createElement("div",{className:"form-group"+(r&&!a.username?" has-error":"")},n.a.createElement("label",{htmlFor:"username"},"COrreo"),n.a.createElement("input",{type:"text",className:"form-control",name:"username",value:a.username,onChange:this.handleChange}),r&&!a.username&&n.a.createElement("div",{className:"help-block"},"El correo es requerido")),n.a.createElement("div",{className:"form-group"+(r&&!a.password?" has-error":"")},n.a.createElement("label",{htmlFor:"password"},"Contrae\xf1a"),n.a.createElement("input",{type:"password",className:"form-control",name:"password",value:a.password,onChange:this.handleChange}),r&&!a.password&&n.a.createElement("div",{className:"help-block"},"La contrase\xf1a es requerida")),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{className:"btn btn-primary"},"Registrar"),e&&n.a.createElement("img",{src:"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="}),n.a.createElement(B.a,{to:"/login",className:"btn btn-link"},"Cancelar"))))}}]),a}(n.a.Component);var te={register:x.register},ae=Object(s.b)((function(e){return{registering:e.registration.registering}}),te)(ee),re=function(e){Object(J.a)(a,e);var t=Object(L.a)(a);function a(e){var r;return Object(M.a)(this,a),r=t.call(this,e),c.listen((function(e,t){r.props.clearAlerts()})),r}return Object(T.a)(a,[{key:"render",value:function(){var e=this.props.alert;return n.a.createElement("div",{className:"jumbotron"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"col-sm-8 col-sm-offset-2"},e.message&&n.a.createElement("div",{className:"alert ".concat(e.type)},e.message),n.a.createElement(B.d,{history:c},n.a.createElement(B.e,null,n.a.createElement(_,{exact:!0,path:"/",component:z}),n.a.createElement(B.c,{path:"/login",component:$}),n.a.createElement(B.c,{path:"/register",component:ae}),n.a.createElement(B.b,{from:"*",to:"/"}))))))}}]),a}(n.a.Component);var ne={clearAlerts:K.clear},oe=Object(s.b)((function(e){return{alert:e.alert}}),ne)(re);Object(o.render)(n.a.createElement(s.a,{store:k},n.a.createElement(oe,null)),document.getElementById("app"))}},[[38,1,2]]]);
//# sourceMappingURL=main.2613f4bf.chunk.js.map