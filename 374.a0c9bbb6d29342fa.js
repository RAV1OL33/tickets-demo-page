"use strict";(self.webpackChunkentityMappingToView=self.webpackChunkentityMappingToView||[]).push([[374],{374:(ie,N,i)=>{i.r(N),i.d(N,{SummaryModule:()=>oe});var _=i(6895),C=i(3060),b=i(5289),I=i(5538),s=i(4006),M=i(5439),l=i.n(M),e=i(4650),F=i(3420),u=i(3546),d=i(9549),O=i(4144),J=i(4385),U=i(3238),S=i(4859),w=i(4850),c=i(7084),x=i(9602),Y=i(4986),Q=i(5963);function j(r,o){if(1&r&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA(),e.TgZ(3,"div"),e._uU(4),e.qZA()()),2&r){const t=e.oxw();e.xp6(2),e.hij(" ",t.pageDict.order_summary.beforeOrder," "),e.xp6(2),e.xDo(" ",t.days,"",t.pageDict.order_summary.days," ",t.hours,":",t.minutes,":",t.seconds," ")}}function E(r,o){if(1&r&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.hij(" ",t.pageDict.order_summary.orderComplete,"\n")}}let P=(()=>{class r{constructor(t){this.pageDict=I.ru,this.months=["Jan","Feb","Mar","April","May","June","July","Aug","Sept","Oct","Nov","Dec"],this.year=2023,this.month=6,this.day=31,this.futureString=t.nativeElement.getAttribute("inputDate")}dhms(){this.currentDate=new Date,this.targetDate=this.departureDate,this.cDateMillisecs=this.currentDate.getTime(),this.tDateMillisecs=this.targetDate.getTime(),this.difference=this.tDateMillisecs-this.cDateMillisecs,this.seconds=Math.floor(this.difference/1e3),this.minutes=Math.floor(this.seconds/60),this.hours=Math.floor(this.minutes/60),this.days=Math.floor(this.hours/24),this.hours%=24,this.minutes%=60,this.seconds%=60,this.hours=this.hours<10?"0"+this.hours:this.hours,this.minutes=this.minutes<10?"0"+this.minutes:this.minutes,this.seconds=this.seconds<10?"0"+this.seconds:this.seconds}ngOnInit(){this.future=new Date(this.futureString),this.$counter=function k(r=0,o=Y.z){return r<0&&(r=0),(0,Q.H)(r,r,o)}(1e3),this.subscription=this.$counter.subscribe(t=>this.dhms())}ngOnDestroy(){this.subscription.unsubscribe()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(e.SBq))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-countdown"]],inputs:{arrivalDate:"arrivalDate",departureDate:"departureDate"},decls:2,vars:2,consts:[[4,"ngIf"]],template:function(t,a){1&t&&(e.YNc(0,j,5,6,"div",0),e.YNc(1,E,2,1,"div",0)),2&t&&(e.Q6J("ngIf",a.days>=0&&a.hours>=0&&a.minutes>=0&&a.seconds>=0),e.xp6(1),e.Q6J("ngIf",!(a.days>=0&&a.hours>=0&&a.minutes>=0&&a.seconds>=0)&&a.days))},dependencies:[_.O5]}),r})();function B(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.pageDict.errors.required,"")}}function V(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.pageDict.errors.required," ")}}function G(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.pageDict.errors.required,"")}}function z(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.pageDict.errors.required," ")}}function K(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.pageDict.errors.more20," ")}}function H(r,o){if(1&r&&(e.TgZ(0,"mat-option",25),e._uU(1),e.qZA()),2&r){const t=o.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",t.name,"")}}function X(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.pageDict.errors.required," ")}}function R(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.pageDict.errors.required," ")}}function $(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.pageDict.errors.required,"")}}function L(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.pageDict.errors.required," ")}}function W(r,o){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw(2);e.xp6(1),e.hij(" ",t.pageDict.errors.expireDate," ")}}function ee(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"mat-card-actions")(1,"button",36),e.NdJ("click",function(){e.CHM(t);const m=e.oxw().index,p=e.oxw();return e.KtG(p.editPassenger(m))}),e._uU(2),e.qZA()()}if(2&r){const t=e.oxw(2);e.xp6(2),e.Oqu(t.pageDict.order_summary.editBtn)}}function te(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"mat-card-actions")(1,"button",36),e.NdJ("click",function(){e.CHM(t);const m=e.oxw().index,p=e.oxw();return e.KtG(p.reverseChanges(m))}),e._uU(2),e.qZA(),e.TgZ(3,"button",36),e.NdJ("click",function(){e.CHM(t);const m=e.oxw().index,p=e.oxw();return e.KtG(p.applyChanges(m))}),e._uU(4),e.qZA()()}if(2&r){const t=e.oxw(2);e.xp6(2),e.Oqu(t.pageDict.order_summary.canselBtn),e.xp6(2),e.Oqu(t.pageDict.order_summary.applyBtn)}}function re(r,o){if(1&r){const t=e.EpF();e.TgZ(0,"div",17)(1,"mat-card",18)(2,"mat-card-title"),e._uU(3),e.qZA(),e.TgZ(4,"mat-card-content")(5,"mat-form-field",19)(6,"mat-label"),e._uU(7),e.qZA(),e._UZ(8,"input",20),e.YNc(9,B,2,1,"mat-error",21),e.qZA(),e.TgZ(10,"mat-form-field",19)(11,"mat-label"),e._uU(12),e.qZA(),e._UZ(13,"input",22),e.YNc(14,V,2,1,"mat-error",21),e.qZA(),e.TgZ(15,"mat-form-field",23)(16,"mat-label"),e._uU(17),e.qZA(),e.TgZ(18,"mat-select",24)(19,"mat-option",25),e._uU(20),e.qZA(),e.TgZ(21,"mat-option",25),e._uU(22),e.qZA()(),e.YNc(23,G,2,1,"mat-error",21),e.qZA(),e.TgZ(24,"mat-form-field",26)(25,"mat-label"),e._uU(26),e.qZA(),e._UZ(27,"input",27),e.TgZ(28,"mat-hint"),e._uU(29,"MM/DD/YYYY"),e.qZA(),e._UZ(30,"mat-datepicker-toggle",7)(31,"mat-datepicker",null,28),e.YNc(33,z,2,1,"mat-error",21),e.YNc(34,K,2,1,"mat-error",21),e.qZA(),e.TgZ(35,"mat-form-field",23)(36,"mat-label"),e._uU(37),e.qZA(),e.TgZ(38,"mat-select",29),e.YNc(39,H,2,2,"mat-option",30),e.qZA(),e.YNc(40,X,2,1,"mat-error",21),e.qZA(),e.TgZ(41,"mat-form-field",23)(42,"mat-label"),e._uU(43),e.qZA(),e.TgZ(44,"mat-select",31),e.NdJ("valueChange",function(m){const n=e.CHM(t).index,g=e.oxw();return e.KtG(g.passengers[n].documentType=m)}),e.TgZ(45,"mat-option",25),e._uU(46),e.qZA(),e.TgZ(47,"mat-option",25),e._uU(48),e.qZA()(),e.YNc(49,R,2,1,"mat-error",21),e.qZA(),e.TgZ(50,"mat-form-field",19)(51,"mat-label"),e._uU(52),e.qZA(),e._UZ(53,"input",32),e.YNc(54,$,2,1,"mat-error",21),e.qZA(),e.TgZ(55,"mat-form-field",26)(56,"mat-label"),e._uU(57),e.qZA(),e._UZ(58,"input",33),e.TgZ(59,"mat-hint"),e._uU(60,"MM/DD/YYYY"),e.qZA(),e._UZ(61,"mat-datepicker-toggle",7)(62,"mat-datepicker",null,34),e.YNc(64,L,2,1,"mat-error",21),e.YNc(65,W,2,1,"mat-error",21),e.qZA()(),e._UZ(66,"mat-divider",35),e.YNc(67,ee,3,1,"mat-card-actions",21),e.YNc(68,te,5,2,"mat-card-actions",21),e._UZ(69,"mat-card-footer"),e.qZA()()}if(2&r){const t=o.$implicit,a=o.index,m=e.MAs(32),p=e.MAs(63),n=e.oxw();let g,y,D,Z,f,v,T,A,q,h;e.Q6J("formGroupName",a),e.xp6(3),e.AsE("",n.pageDict.passenger_details.passengerTitle," ",a+1,""),e.xp6(4),e.Oqu(n.pageDict.passenger_details.passengerFirstName),e.xp6(2),e.Q6J("ngIf",null==(g=n.passengersFormArray.controls[a].get("fName"))||null==g.errors?null:g.errors.required),e.xp6(3),e.Oqu(n.pageDict.passenger_details.passengerLastName),e.xp6(2),e.Q6J("ngIf",null==(y=n.passengersFormArray.controls[a].get("lName"))||null==y.errors?null:y.errors.required),e.xp6(3),e.Oqu(n.pageDict.passenger_details.passengerSex),e.xp6(2),e.Q6J("value","Male"),e.xp6(1),e.hij(" ",n.pageDict.passenger_details.passengerSexMale," "),e.xp6(1),e.Q6J("value","Female"),e.xp6(1),e.hij(" ",n.pageDict.passenger_details.passengerSexFemale," "),e.xp6(1),e.Q6J("ngIf",null==(D=n.passengersFormArray.controls[a].get("sex"))||null==D.errors?null:D.errors.required),e.xp6(3),e.Oqu(n.pageDict.passenger_details.passengerBirthDate),e.xp6(1),e.Q6J("max",n.maxBirthDate)("matDatepicker",m),e.xp6(3),e.Q6J("for",m),e.xp6(3),e.Q6J("ngIf",null==(Z=n.passengersFormArray.controls[a].get("birthdate"))||null==Z.errors?null:Z.errors.required),e.xp6(1),e.Q6J("ngIf",(null==(f=n.passengersFormArray.controls[a].get("birthdate"))||null==f.errors?null:f.errors.birthdateInvalid)&&(null==(f=n.passengersFormArray.controls[a].get("birthdate"))?null:f.value)),e.xp6(3),e.Oqu(n.pageDict.passenger_details.passengerNationality),e.xp6(2),e.Q6J("ngForOf",n.nationalities),e.xp6(1),e.Q6J("ngIf",null==(v=n.passengersFormArray.controls[a].get("nationalityId"))||null==v.errors?null:v.errors.required),e.xp6(3),e.Oqu(n.pageDict.passenger_details.documentType),e.xp6(1),e.Q6J("value",n.passengers[a].documentType),e.xp6(1),e.Q6J("value",n.passengerDocumntType.InternalPassport),e.xp6(1),e.hij(" ",n.pageDict.passenger_details.internalPassport," "),e.xp6(1),e.Q6J("value",n.passengerDocumntType.InternationalPassport),e.xp6(1),e.hij(" ",n.pageDict.passenger_details.internationalPassport," "),e.xp6(1),e.Q6J("ngIf",null==(T=n.passengersFormArray.controls[a].get("documentType"))||null==T.errors?null:T.errors.required),e.xp6(3),e.Oqu(n.pageDict.passenger_details.passengerPassNo),e.xp6(2),e.Q6J("ngIf",null==(A=n.passengersFormArray.controls[a].get("passportNo"))||null==A.errors?null:A.errors.required),e.xp6(3),e.Oqu(n.pageDict.passenger_details.passengerPassExpireDate),e.xp6(1),e.Q6J("min",n.maxBirthDate)("matDatepicker",p),e.xp6(3),e.Q6J("for",p),e.xp6(3),e.Q6J("ngIf",null==(q=n.passengersFormArray.controls[a].get("passportDateOfExpire"))||null==q.errors?null:q.errors.required),e.xp6(1),e.Q6J("ngIf",(null==(h=n.passengersFormArray.controls[a].get("passportDateOfExpire"))||null==h.errors?null:h.errors.passportDateOfExpireInvalid)&&(null==(h=n.passengersFormArray.controls[a].get("passportDateOfExpire"))?null:h.value)),e.xp6(2),e.Q6J("ngIf",t.disabled),e.xp6(1),e.Q6J("ngIf",!t.disabled)}}const ae=[{path:"",component:(()=>{class r{constructor(t,a){this.service=t,this.fb=a,this.pageDict=I.ru,this.order2={airportFrom:{altitude:null,cityId:1345,iata:"MSQ",icao:"UMMS",id:484,isDeleted:!1,isVirtual:!1,latitude:53.889725,longitude:28.032442,name:"Minsk",parentId:0,systemName:"Minsk",timezone:2},airportTo:{altitude:null,cityId:1272,iata:"DXB",icao:"OMDB",id:434,isDeleted:!1,isVirtual:!1,latitude:25.248665,longitude:55.352917,name:"Dubai International",parentId:0,systemName:"Dubai International",timezone:4},departureDate:new Date,arrivalDate:new Date,passengers:[{birthdate:new Date,documentType:2,fName:"Test",lName:"Test",nationalityId:1,passportDateOfExpire:new Date,passportNo:"545454666333999",sex:"Male"},{birthdate:new Date,documentType:2,fName:"Test",lName:"Test",nationalityId:1,passportDateOfExpire:new Date,passportNo:"545454666333999",sex:"Male"}]},this.order={},this.nationalities=[],this.passengers=[],this.passengerDocumntType=b.r,this.destinationTo="",this.destinationFrom="",this.passengerForm=this.fb.group({passengersArray:this.fb.array([])}),this.dateFrom=new s.NI({value:this.order.departureDate,disabled:!0}),this.dateTo=new s.NI(this.order.arrivalDate),this.maxBirthDate=new Date}get passengersFormArray(){return this.passengerForm.controls.passengersArray}diffY(t){return l()().diff(l()(t),"days")/365>20}passportDateOfExpireValidator(){return t=>l()().diff(l()(t.value),"days")<=0&&l()().diff(l()(t.value),"days")>-180?{passportDateOfExpireInvalid:!0}:null}birthdateValidator(){return t=>this.diffY(t.value)?null:{birthdateInvalid:!0}}addNewPassenger(t){const a=this.fb.group({fName:[t.fName,s.kI.required],lName:[t.lName,s.kI.required],sex:[t.sex,s.kI.required],passportNo:[t.passportNo,s.kI.required],nationalityId:[t.nationalityId,s.kI.required],documentType:[t.documentType,s.kI.required],passportDateOfExpire:[t.passportDateOfExpire,[s.kI.required,this.passportDateOfExpireValidator()]],birthdate:[t.birthdate,[s.kI.required,this.birthdateValidator()]]});this.passengersFormArray.push(a),this.passengers.push({documentType:2})}ngOnInit(){this.service.getNationalities().subscribe(t=>{this.nationalities=t}),this.service.getOrderData().subscribe(t=>{this.order=t}),console.log(this.order);for(let t of this.order.passengers)this.addNewPassenger(t);this.passengerForm.disable(),this.destinationTo=this.service.getDestinationTo(),this.destinationFrom=this.service.getDestinationFrom(),this.dateFrom=new s.NI({value:this.order.departureDate,disabled:!0}),this.dateTo=new s.NI({value:this.order.arrivalDate,disabled:!0})}editPassenger(t){this.passengersFormArray.controls[t].enable()}applyChanges(t){console.log(this.passengersFormArray.controls[t].value),this.passengersFormArray.controls[t].valid&&(this.order.passengers.splice(t,1,this.passengersFormArray.controls[t].value),this.passengersFormArray.controls[t].disable(),this.service.setOrderData(this.order))}reverseChanges(t){let a=this.order.passengers[t];const m=this.fb.group({fName:[a.fName,s.kI.required],lName:[a.lName,s.kI.required],sex:[a.sex,s.kI.required],passportNo:[a.passportNo,s.kI.required],nationalityId:[a.nationalityId,s.kI.required],documentType:[a.documentType,s.kI.required],passportDateOfExpire:[a.passportDateOfExpire,[s.kI.required,this.passportDateOfExpireValidator()]],birthdate:[a.birthdate,[s.kI.required,this.birthdateValidator()]]});this.passengersFormArray.controls.splice(t,1,m),this.passengersFormArray.controls[t].disable()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(F.P),e.Y36(s.qu))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-summary"]],decls:43,vars:18,consts:[[1,"order-summary__container"],["multi","",1,""],["expanded","true"],[1,"flex-sides"],[1,"order-summary__destination","flex-sides"],["appearance","fill",1,""],["matInput","",3,"matDatepicker","formControl"],["matSuffix","",3,"for"],["fromDate",""],["matInput","",3,"max","matDatepicker","formControl"],["matSuffix","","disable","false",3,"for"],["toDate",""],[1,"order-summary__countdown"],[3,"departureDate","arrivalDate"],["action","",3,"formGroup"],["formArrayName","passengersArray"],[3,"formGroupName",4,"ngFor","ngForOf"],[3,"formGroupName"],[1,"passengers-list__card"],["appearance","fill",1,"example-form-field"],["matInput","","type","text","formControlName","fName"],[4,"ngIf"],["matInput","","type","text","formControlName","lName"],["appearance","fill"],["formControlName","sex"],[3,"value"],["appearance","fill",1,"example-full-width"],["matInput","","formControlName","birthdate",3,"max","matDatepicker"],["birthDate",""],["formControlName","nationalityId"],[3,"value",4,"ngFor","ngForOf"],["formControlName","documentType",3,"value","valueChange"],["matInput","","type","text","formControlName","passportNo"],["matInput","","formControlName","passportDateOfExpire",3,"min","max","matDatepicker"],["passExpireDate",""],["inset",""],["mat-button","",3,"click"]],template:function(t,a){if(1&t&&(e.TgZ(0,"div",0)(1,"mat-accordion",1)(2,"mat-expansion-panel",2)(3,"mat-expansion-panel-header")(4,"mat-panel-title"),e._uU(5),e.qZA(),e.TgZ(6,"mat-panel-description"),e._uU(7),e.qZA()(),e.TgZ(8,"div",3)(9,"div"),e._uU(10),e.qZA(),e.TgZ(11,"div"),e._uU(12),e.qZA()(),e.TgZ(13,"div",4)(14,"mat-form-field",5)(15,"mat-label"),e._uU(16),e.qZA(),e._UZ(17,"input",6),e.TgZ(18,"mat-hint"),e._uU(19,"MM/DD/YYYY"),e.qZA(),e._UZ(20,"mat-datepicker-toggle",7)(21,"mat-datepicker",null,8),e.qZA(),e.TgZ(23,"mat-form-field",5)(24,"mat-label"),e._uU(25),e.qZA(),e._UZ(26,"input",9),e.TgZ(27,"mat-hint"),e._uU(28,"MM/DD/YYYY"),e.qZA(),e._UZ(29,"mat-datepicker-toggle",10)(30,"mat-datepicker",null,11),e.qZA()(),e.TgZ(32,"div",12),e._UZ(33,"app-countdown",13),e.qZA()(),e.TgZ(34,"mat-expansion-panel")(35,"mat-expansion-panel-header")(36,"mat-panel-title"),e._uU(37),e.qZA(),e.TgZ(38,"mat-panel-description"),e._uU(39),e.qZA()(),e.TgZ(40,"form",14)(41,"div",15),e.YNc(42,re,70,39,"div",16),e.qZA()()()()()),2&t){const m=e.MAs(22),p=e.MAs(31);e.xp6(5),e.hij(" ",a.pageDict.order_summary.summaryTitle," "),e.xp6(2),e.hij(" ",a.pageDict.order_summary.titleDescription," "),e.xp6(3),e.Oqu(a.destinationFrom),e.xp6(2),e.Oqu(a.destinationTo),e.xp6(4),e.Oqu(a.pageDict.order_summary.datepickerFromInput),e.xp6(1),e.Q6J("matDatepicker",m)("formControl",a.dateFrom),e.xp6(3),e.Q6J("for",m),e.xp6(5),e.Oqu(a.pageDict.order_summary.datepickerToInput),e.xp6(1),e.Q6J("matDatepicker",p)("formControl",a.dateTo),e.xp6(3),e.Q6J("for",p),e.xp6(4),e.Q6J("departureDate",a.order.departureDate)("arrivalDate",a.order.arrivalDate),e.xp6(4),e.hij(" ",a.pageDict.order_summary.passengers," "),e.xp6(2),e.hij(" ",a.pageDict.passenger_details.titleDescription," "),e.xp6(1),e.Q6J("formGroup",a.passengerForm),e.xp6(2),e.Q6J("ngForOf",a.passengersFormArray.controls)}},dependencies:[_.sg,_.O5,u.a8,u.dn,u.n5,u.hq,u.rt,d.TO,d.KE,d.bx,d.hX,d.R9,O.Nt,J.gD,U.ey,S.lW,w.d,c.pp,c.ib,c.yz,c.yK,c.u4,x.Mq,x.hl,x.nW,s._Y,s.Fj,s.JJ,s.JL,s.oH,s.sg,s.u,s.x0,s.CE,P],styles:[".order-summary__container[_ngcontent-%COMP%]{max-width:1085px;margin:auto}.order-summary__destination[_ngcontent-%COMP%]{padding:1.5em 0}.order-summary__countdown[_ngcontent-%COMP%]{font-size:1.5em;display:flex;justify-content:center}.flex-sides[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:100%;flex-wrap:wrap}@media (max-width: 320px){.dont-show[_ngcontent-%COMP%]{display:none}}"]}),r})()}];let ne=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[C.Bz.forChild(ae),C.Bz]}),r})();var se=i(7081);let oe=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[_.ez,se.q,ne,s.u5,s.UX,U.XK]}),r})()}}]);