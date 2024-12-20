"use strict";(globalThis.webpackChunkgoogle_listings_and_ads=globalThis.webpackChunkgoogle_listings_and_ads||[]).push([[61],{7986:(e,t,s)=>{s.r(t),s.d(t,{default:()=>ze});var a=s(1609),n=s(7723),l=s(6087),o=s(6476),i=s(9927),r=s(6427),c=s(6942),d=s.n(c),g=s(2159),u=s(6257),m=s(1177),_=s(8846),p=s(3905);const E=[{key:"type",label:(0,n.__)("Type","google-listings-and-ads"),isLeftAligned:!0,required:!0},{key:"affectedProduct",label:(0,n.__)("Affected product","google-listings-and-ads"),isLeftAligned:!0,required:!0},{key:"issue",label:(0,n.__)("Issue","google-listings-and-ads"),isLeftAligned:!0,required:!0},{key:"suggestedAction",label:(0,n.__)("Suggested action","google-listings-and-ads"),isLeftAligned:!0,required:!0},{key:"action",label:"",required:!0}];var v=s(6473),h=s(7892),y=s(7792),b=s(2178),f=s(8987),w=s(6494),A=s(6727),k=s(6459);const N=()=>{const e=(0,A.A)(),t={[p.Tj]:(0,n.__)("All account issues resolved","google-listings-and-ads"),[p.ds]:(0,n.__)("All product issues resolved","google-listings-and-ads")},s={[p.Tj]:(0,l.createInterpolateElement)((0,n.__)("However, there are issues affecting your products that needs to be resolved. Head over to the <strong>Product Issues</strong> tab to view them.","google-listings-and-ads"),{strong:(0,a.createElement)("strong",null)}),[p.ds]:(0,l.createInterpolateElement)((0,n.__)("However, there are issues affecting your account that needs to be resolved. Head over to the <strong>Account Issues</strong> tab to view them.","google-listings-and-ads"),{strong:(0,a.createElement)("strong",null)})};return(0,a.createElement)("div",{className:"gla-issues-solved"},(0,a.createElement)(r.Dashicon,{icon:"yes-alt",className:"gla-issues-solved__icon"}),(0,a.createElement)(k.A,{variant:"subtitle"},t[e]),(0,a.createElement)(k.A,{variant:"body",className:"gla-issues-solved__body"},s[e]))};var C=s(6227),S=s(9457);const P=({issue:e,onRequestClose:t=()=>{}})=>(0,a.createElement)(S.A,{className:"gla-issues-table-data-modal",title:e.issue,onRequestClose:t,buttons:[(0,a.createElement)(h.A,{key:"learn-more",isPrimary:!0,target:"_blank",href:e.action_url,text:(0,n.__)("Learn more","google-listings-and-ads"),eventName:"gla_documentation_link_click",eventProps:{context:"issues-data-table-modal",linkId:e.code,href:e.action_url},icon:(0,a.createElement)(C.A,null)})]},(0,a.createElement)("p",null,(0,a.createElement)("strong",null,(0,n.__)("What to do?","google-listings-and-ads"))),(0,a.createElement)("p",null,e.action)),I=({data:e})=>{const t=(0,n.__)("Read more about this issue","google-listings-and-ads");return e?e.issues?.length?(0,a.createElement)(_.Table,{caption:(0,n.__)("Issues to resolve","google-listings-and-ads"),headers:E,rows:e.issues.map((e=>[{display:"warning"===e.severity?(0,a.createElement)(y.A,null):(0,a.createElement)(b.A,null)},{display:e.product},{display:e.issue},{display:e.action?(0,a.createElement)(w.A,{button:(0,a.createElement)(h.A,{isLink:!0,eventName:"gla_click_read_more_about_issue",eventProps:{context:"issues-to-resolve",issue:e.code}},t),modal:(0,a.createElement)(P,{issue:e})}):(0,a.createElement)(m.A,{context:"issues-to-resolve",linkId:e.code,href:e.action_url},t)},{display:e.type===p.ds&&(0,a.createElement)(f.A,{productId:e.product_id,eventName:"gla_edit_product_issue_click",eventProps:{code:e.code,issue:e.issue}})}]))}):(0,a.createElement)(N,null):(0,a.createElement)(_.EmptyTable,{headers:E,numberOfRows:1},(0,n.__)("An error occurred while retrieving issues. Please try again later.","google-listings-and-ads"))};var x=s(6425),q=s(1396);const R=()=>{const e=(0,A.A)(),{page:t,setPage:s}=(0,q.A)(e),{data:l,hasFinishedResolution:o}=(0,x.A)(e,t);return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(r.CardBody,{size:null},o?(0,a.createElement)(I,{data:l}):(0,a.createElement)(_.TablePlaceholder,{headers:E,caption:(0,n.__)("Loading Issues To Resolve","google-listings-and-ads")})),l?.total>0&&(0,a.createElement)(r.CardFooter,{justify:"center"},(0,a.createElement)(_.Pagination,{page:t,perPage:p.X4,total:l.total,showPagePicker:!1,showPerPagePicker:!1,onPageChange:(t,a)=>{s(t),(0,v.Xh)(`${e}-issues-to-resolve`,t,a)}})))};var F=s(347),T=s(7951);const G=()=>{const e=(0,T.A)(),t=(0,A.A)(),s=t=>{const s=e[t];return s>=0?`(${s})`:""},l=[{key:p.Tj,title:`${(0,n.__)("Account Issues","google-listings-and-ads")} ${s(p.Tj)}`,href:(0,o.getNewPath)({issueType:p.Tj},"/google/product-feed",{})},{key:p.ds,title:`${(0,n.__)("Product Issues","google-listings-and-ads")} ${s(p.ds)}`,href:(0,o.getNewPath)({issueType:p.ds},"/google/product-feed",{})}];return(0,a.createElement)(F.A,{tabs:l,selectedKey:t})},L=({issues:e=[]})=>{const[t,s]=(0,l.useState)(!1);if(!e.length)return null;const o=t?e:e.slice(0,5);return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(k.A,{variant:"subtitle"},(0,n.__)("Request a review on the following issue(s):","google-listings-and-ads")),(0,a.createElement)("ul",{className:"gla-review-request-modal__issue-list"},o.map((e=>(0,a.createElement)("li",{key:e.code},e.issue)))),e.length>5&&(0,a.createElement)(h.A,{isTertiary:!0,onClick:()=>{(0,v.ce)("gla_request_review_issue_list_toggle_click",{action:t?"collapse":"expand"}),s(!t)}},t?(0,n.__)("Show less","google-listings-and-ads"):(0,n.sprintf)(
// translators: %d: The number of extra issues issues
// translators: %d: The number of extra issues issues
(0,n.__)("+ %d more issue(s)","google-listings-and-ads"),e.length-5)))};var D=s(5306),O=s(5640);const B=({issues:e=[],isActive:t=!1,onClose:s=()=>{}})=>{const[o,i]=(0,l.useState)(!1),[c,d]=(0,l.useState)(!1),{sendMCReviewRequest:g}=(0,D.j)(),{createNotice:u}=(0,O.A)();if(!t)return null;const _=e=>{c||s(e)};return(0,a.createElement)(S.A,{className:"gla-review-request-modal",title:(0,n.__)("Request account review","google-listings-and-ads"),buttons:[(0,a.createElement)(h.A,{key:"secondary",isSecondary:!0,onClick:()=>{_("maybe-later")}},(0,n.__)("Cancel","google-listings-and-ads")),(0,a.createElement)(h.A,{loading:c,key:"primary",isPrimary:!0,disabled:!o&&e.length,onClick:()=>{c||(d(!0),(0,v.ce)("gla_request_review"),g().then((()=>{u("success",(0,n.__)("Your account review was successfully requested.","google-listings-and-ads")),(0,v.ce)("gla_request_review_success"),s("request-review-success")})).catch((()=>{d(!1),(0,v.ce)("gla_request_review_failure")})))}},(0,n.__)("Request account review","google-listings-and-ads"))],onRequestClose:()=>{_("dismiss")}},(0,a.createElement)(r.Notice,{className:"gla-review-request-modal__notice",status:"warning",isDismissible:!1},(0,a.createElement)("p",null,(0,l.createInterpolateElement)((0,n.__)("Please ensure that you have resolved all account suspension issues before requesting for an account review. If some issues are unresolved, you wont be able to request another review for at least 7 days. <Link>Learn more</Link>","google-listings-and-ads"),{Link:(0,a.createElement)(m.A,{href:"https://support.google.com/merchants/answer/2948694",context:"request-review-modal",linkId:"request-review-modal-learn-more"})}))),(0,a.createElement)(L,{issues:e}),e.length>0&&(0,a.createElement)(r.CheckboxControl,{className:"gla-review-request-modal__checkbox",label:(0,n.__)("I have resolved all the issue(s) listed above.","google-listings-and-ads"),checked:o,onChange:e=>{i(e),(0,v.ce)("gla_request_review_issues_solved_checkbox_click",{action:e?"check":"uncheck"})}}))};var $=s(8443),z=s(6397),M=s(4473);const U={status:(0,a.createElement)("span",{className:"gla-error"},(0,n.__)("Disapproved","google-listings-and-ads")),statusDescription:(0,n.__)("To make products eligible to show on Google, fix all setup and policy issues that were found.","google-listings-and-ads"),title:(0,n.__)("We’ve found unresolved issues in your account.","google-listings-and-ads"),body:(0,n.__)("Fix all account suspension issues listed below to request a review of your account.","google-listings-and-ads"),requestButton:!0,icon:(0,a.createElement)(b.A,{size:24})},W={...U,status:(0,n.__)("Warning","google-listings-and-ads"),statusDescription:(0,n.__)("To keep showing your products on Google, fix your setup and policy issues.","google-listings-and-ads"),icon:(0,a.createElement)(y.A,{size:24})},j={status:(0,n.__)("Pending review","google-listings-and-ads"),statusDescription:(0,n.__)("This may take up to 3 days. If approved, your products will show on Google once it’s completed.","google-listings-and-ads"),icon:(0,a.createElement)(M.A,{size:24})},Y={UNDER_REVIEW:{status:(0,n.__)("Under review","google-listings-and-ads"),statusDescription:(0,n.__)("Review requests take at least 7 days.","google-listings-and-ads"),icon:(0,a.createElement)(M.A,{size:24})},PENDING_REVIEW:j,DISAPPROVED:U,WARNING:W,APPROVED:{status:(0,a.createElement)("span",{className:"gla-success"},(0,n.__)("Approved","google-listings-and-ads")),statusDescription:(0,n.__)("Your products listings are on Google.","google-listings-and-ads"),icon:(0,a.createElement)(z.A,{size:24})},ONBOARDING:{status:(0,n.__)("No products added","google-listings-and-ads"),statusDescription:(0,n.__)("Add and sync products to Google.","google-listings-and-ads"),icon:(0,a.createElement)(y.A,{size:24})}},H=({account:e,onRequestReviewClick:t=()=>{}})=>{const s=Y[e.status];if(!s)return null;const l=e.cooldown&&(0,n.sprintf)(
// translators: %s: Cool down period date.
// translators: %s: Cool down period date.
(0,n.__)("Your account is under cool down period. You can request a new review on %s.","google-listings-and-ads"),(0,$.format)(`${p.Th.dateFormat}, ${p.Th.timeFormat}`,new Date(e.cooldown)));return(0,a.createElement)(r.Flex,{"data-testid":"gla-review-request-notice",className:"gla-review-request-notice"},(0,a.createElement)(r.FlexItem,null,(0,a.createElement)(r.Flex,null,(0,a.createElement)(r.FlexItem,{className:"gla-review-request-notice__icon"},s.icon),(0,a.createElement)(r.FlexItem,{className:"gla-review-request-notice__text"},(0,a.createElement)(k.A,{variant:"subtitle"},s.title),(0,a.createElement)(k.A,{className:"gla-review-request-notice__text-body",variant:"body"},l||s.body)))),(0,a.createElement)(r.FlexItem,{className:"gla-review-request-notice__button"},s.requestButton&&(e.cooldown||Object.keys(e.reviewEligibleRegions)?.length>0)&&(0,a.createElement)(h.A,{isPrimary:!0,onClick:t,disabled:!!e.cooldown,text:(0,n.__)("Request review","google-listings-and-ads")})))},V=({account:e={}})=>{const[t,s]=(0,l.useState)(!1),n=(0,A.A)(),{data:o,hasFinishedResolution:i}=(0,x.A)(p.Tj,1,200),{data:r,hasFinishedResolution:c}=e;return i&&c&&(d=r.status,Y[d]?.title)&&n===p.Tj?(0,a.createElement)("div",{className:"gla-review-request"},(0,a.createElement)(B,{issues:o.issues.filter((e=>r.issues.includes(e.code))),isActive:t,onClose:e=>{s(!1),(0,v.ce)("gla_modal_closed",{context:p.zU,action:e})}}),(0,a.createElement)(H,{account:r,onRequestReviewClick:()=>{s(!0),(0,v.ce)("gla_modal_open",{context:p.zU})}})):null;var d};var K=s(9415);const X=(0,a.createElement)(u.A,{id:"issues-to-resolve"},(0,l.createInterpolateElement)((0,n.__)("Products and stores must meet <link>Google Merchant Center’s requirements</link> in order to get approved. WooCommerce and Google automatically check your product feed to help you resolve any issues. ","google-listings-and-ads"),{link:(0,a.createElement)(m.A,{context:"product-feed",linkId:"issues-to-resolve",href:"https://support.google.com/merchants/answer/6363310"})})),Q=()=>{const{total:e}=(0,T.A)(),t=(0,K.A)("getMCReviewRequest");return e?(0,a.createElement)(g.A,{className:"gla-issues-table-card"},(0,a.createElement)(r.Card,{className:d()("woocommerce-table",{"has-actions":!!X})},(0,a.createElement)(r.CardHeader,null,(0,a.createElement)(k.A,{variant:"title-small",as:"h2"},(0,n.__)("Issues to resolve","google-listings-and-ads")),(0,a.createElement)("div",{className:"woocommerce-table__actions"},X)),(0,a.createElement)(G,null),(0,a.createElement)(V,{account:t}),(0,a.createElement)(R,null))):null};var Z=s(4772),J=s(9039);const ee=(0,n.__)("Select channel visibility","google-listings-and-ads"),te=[{key:0,value:!0,label:(0,n.__)("Sync and show","google-listings-and-ads")},{key:1,value:!1,label:(0,n.__)("Don’t sync and show","google-listings-and-ads")}];function se({withTooltip:e,children:t,...s}){return e?(0,a.createElement)(J.A,{children:t,...s}):t}function ae({selectedSize:e,onActionClick:t}){const[s,o]=(0,l.useState)(null);return(0,l.useEffect)((()=>{0===e&&o(null)}),[e]),0===e?(0,a.createElement)(J.A,{placement:"top",text:(0,n.__)("Select one or more products to bulk edit","google-listings-and-ads")},(0,a.createElement)(r.Icon,{icon:Z.A})):(0,a.createElement)(a.Fragment,null,(0,a.createElement)(_.SelectControl,{label:ee,options:te,selected:s,onChange:o}),(0,a.createElement)(se,{withTooltip:null===s,placement:"top",text:ee},(0,a.createElement)(h.A,{isSecondary:!0,disabled:null===s,onClick:()=>{const e=te.find((({key:e})=>e===s));t(e.value)}},(0,n.sprintf)(
// translators: %d: number of selected products to edit channel visibility, with minimum value of 1.
// translators: %d: number of selected products to edit channel visibility, with minimum value of 1.
(0,n.__)("Apply to %d selected","google-listings-and-ads"),e))))}const ne={approved:(0,n.__)("Approved","google-listings-and-ads"),partially_approved:(0,n.__)("Partially approved","google-listings-and-ads"),expiring:(0,n.__)("Expiring","google-listings-and-ads"),pending:(0,n.__)("Pending","google-listings-and-ads"),disapproved:(0,n.__)("Disapproved","google-listings-and-ads"),not_synced:(0,n.__)("Not synced","google-listings-and-ads")},le="product-feed",oe=e=>e?"sync_and_show":"dont_sync_and_show",ie=()=>{const[e,t]=(0,l.useState)(new Set),[s,o]=(0,l.useState)({page:1,per_page:10,orderby:"title",order:"asc"}),{hasFinishedResolution:i,data:c}=(0,K.A)("getMCProductFeed",s),{updateMCProductVisibility:u}=(0,D.j)(),{createNotice:m}=(0,O.A)(),p=e=>{if(e){const e=c?.products.map((e=>e.id));t(new Set([...e]))}else t(new Set)},E=[{key:"select",label:(0,a.createElement)(r.CheckboxControl,{disabled:!c?.products,checked:c?.products?.length>0&&c?.products?.every((t=>e.has(t.id))),onChange:p}),isLeftAligned:!0,required:!0},{key:"title",label:(0,n.__)("Product Title","google-listings-and-ads"),isLeftAligned:!0,required:!0,isSortable:!0},{key:"visible",label:(0,n.__)("Channel Visibility","google-listings-and-ads"),isLeftAligned:!0,isSortable:!0},{key:"status",label:(0,n.__)("Status","google-listings-and-ads"),isLeftAligned:!0,isSortable:!0},{key:"action",label:"",required:!0}],h=(0,a.createElement)(ae,{selectedSize:e.size,onActionClick:t=>{const s=Array.from(e),{length:a}=s;u(s,t).then((()=>{const e=(0,n.sprintf)(
// translators: %d: number of products are updated successfully, with minimum value of 1.
// translators: %d: number of products are updated successfully, with minimum value of 1.
(0,n._n)("You successfully changed the channel visibility of %d product","You successfully changed the channel visibility of %d products",a,"google-listings-and-ads"),a);m("success",e)})),(0,v.ce)("gla_bulk_edit_click",{context:le,number_of_items:a,visibility_to:oe(t)}),p(!1)}});return(0,a.createElement)(g.A,{className:"gla-product-feed-table-card"},(0,a.createElement)(r.Card,{className:d()("woocommerce-table",{"has-actions":!!h})},(0,a.createElement)(r.CardHeader,null,(0,a.createElement)(k.A,{variant:"title-small",as:"h2"},(0,n.__)("Product Feed","google-listings-and-ads")),(0,a.createElement)("div",{className:"woocommerce-table__actions"},h)),(0,a.createElement)(r.CardBody,{size:null},!i&&(0,a.createElement)(_.TablePlaceholder,{headers:E,numberOfRows:s.per_page,caption:(0,n.__)("Loading product feed","google-listings-and-ads")}),i&&!c?.products&&(0,a.createElement)(_.EmptyTable,{headers:E,numberOfRows:1},(0,n.__)("An error occurred while retrieving products. Please try again later.","google-listings-and-ads")),i&&c?.products&&(0,a.createElement)(_.Table,{headers:E,rows:c.products.map((s=>{return[{display:(0,a.createElement)(r.CheckboxControl,{checked:e.has(s.id),onChange:(l=s.id,s=>{s?t(new Set([...e,l])):(e.delete(l),t(new Set(e)))})})},{display:s.title},{display:s.visible?(0,n.__)("Sync and show","google-listings-and-ads"):(0,n.__)("Don't sync and show","google-listings-and-ads")},{display:ne[s.status]},{display:(0,a.createElement)(f.A,{productId:s.id,eventName:"gla_edit_product_click",eventProps:{status:s.status,visibility:oe(s.visible)}})}];var l})),query:s,onSort:(e,t)=>{o({...s,orderby:e,order:t})}})),(0,a.createElement)(r.CardFooter,{justify:"center"},c?.total>0&&(0,a.createElement)(_.Pagination,{page:s.page,perPage:s.per_page,total:c.total,showPagePicker:!0,showPerPagePicker:!1,onPageChange:(e,t)=>{o({...s,page:e}),(0,v.Xh)(le,e,t)}}))))};var re=s(8468),ce=s(5573);const de=()=>(0,a.createElement)(ce.SVG,{width:"8",height:"8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,a.createElement)(ce.Circle,{cx:"4",cy:"4",r:"4"}));function ge({currentPage:e,numberOfPages:t,setCurrentPage:s}){return(0,a.createElement)("ul",{className:"components-guide__page-control","aria-label":(0,n.__)("Guide controls")},(0,re.times)(t,(l=>(0,a.createElement)("li",{key:l,"aria-current":l===e?"step":void 0},(0,a.createElement)(r.Button,{key:l,icon:(0,a.createElement)(de,null),"aria-label":(0,n.sprintf)(/* translators: 1: current page number 2: total number of pages */ /* translators: 1: current page number 2: total number of pages */
(0,n.__)("Page %1$d of %2$d"),l+1,t),onClick:()=>s(l)})))))}function ue(e){const t=(0,l.useRef)();return(0,l.useLayoutEffect)((()=>{const{ownerDocument:e}=t.current,{activeElement:s,body:a}=e;s&&s!==a||t.current.focus()}),[]),(0,a.createElement)(r.Button,{...e,ref:t})}function me({className:e,contentLabel:t,backButtonText:s,finishButtonText:o,renderFinish:i=e=>e,onFinish:c,pages:g}){const[u,m]=(0,l.useState)(0),_=u>0,p=u<g.length-1,E=()=>{_&&m(u-1)},v=()=>{p&&m(u+1)};if(0===g.length)return null;let h=null;p||(h=i((0,a.createElement)(ue,{className:"components-guide__finish-button",onClick:c},o||(0,n.__)("Finish"))));const y=d()("gla-admin-page","components-guide",e);return(0,a.createElement)(r.Modal,{className:y,contentLabel:t,onRequestClose:c},(0,a.createElement)(r.KeyboardShortcuts,{key:u,shortcuts:{left:E,right:v}}),(0,a.createElement)("div",{className:"components-guide__container"},(0,a.createElement)("div",{className:"components-guide__page"},g[u].image,g.length>1&&(0,a.createElement)(ge,{currentPage:u,numberOfPages:g.length,setCurrentPage:m}),g[u].content),(0,a.createElement)("div",{className:"components-guide__footer"},_&&(0,a.createElement)(r.Button,{className:"components-guide__back-button",onClick:E},s||(0,n.__)("Previous")),p&&(0,a.createElement)(r.Button,{className:"components-guide__forward-button",onClick:v},(0,n.__)("Next")),h)))}var _e=s(4270),pe=s(2391),Ee=s(5744),ve=s(3666),he=s(8317),ye=s(9692);const be="gla_modal_closed",fe=(0,a.createElement)("div",{className:"gla-submission-success-guide__logo-block"},(0,a.createElement)("div",{className:"gla-submission-success-guide__logo-item"},(0,a.createElement)("img",{src:he,alt:(0,n.__)("WooCommerce Logo","google-listings-and-ads"),width:"145",height:"31"})),(0,a.createElement)("div",{className:"gla-submission-success-guide__logo-separator-line"}),(0,a.createElement)("div",{className:"gla-submission-success-guide__logo-item"},(0,a.createElement)("img",{src:ye,alt:(0,n.__)("Google Logo","google-listings-and-ads"),width:"106",height:"36"}))),we=[{image:fe,content:(0,a.createElement)(_e.A,{title:(0,n.__)("You’ve successfully set up Google for WooCommerce! 🎉","google-listings-and-ads")},(0,a.createElement)("p",null,(0,n.__)("Your products are being synced and reviewed. Google reviews product listings in 3-5 days.","google-listings-and-ads")),(0,a.createElement)("p",null,p.Th.adsSetupComplete?(0,n.__)("No ads will launch yet and you won’t be charged until Google approves your listings. Updates are available in your WooCommerce dashboard.","google-listings-and-ads"):(0,l.createInterpolateElement)((0,n.__)("<productFeedLink>Manage and edit your product feed in WooCommerce.</productFeedLink> We will also notify you of any product feed issues to ensure your products get approved and perform well on Google.","google-listings-and-ads"),{productFeedLink:(0,a.createElement)(_e.i,{href:(0,ve.hP)(),context:"product-feed"})})))},{image:fe,content:(0,a.createElement)(_e.A,{title:(0,n.__)("Spend $500 to get $500 in Google Ads credits","google-listings-and-ads")},(0,a.createElement)("p",null,(0,n.__)("New to Google Ads? Get $500 in ad credit when you spend $500 within your first 60 days* You can edit or cancel your campaign at any time.","google-listings-and-ads")),(0,a.createElement)("cite",null,(0,l.createInterpolateElement)((0,n.__)("*Full terms and conditions <link>here</link>.","google-listings-and-ads"),{link:(0,a.createElement)(_e.i,{href:"https://www.google.com/ads/coupons/terms/",context:"terms-of-ads-coupons"})})))}];p.Th.adsSetupComplete&&we.pop();const Ae=e=>{(0,o.getHistory)().replace((0,ve.hP)());let t="dismiss";e&&(t=(e.currentTarget||e.target).dataset.action||t),(0,v.ce)(be,{context:p.K4.SUBMISSION_SUCCESS,action:t})},ke=()=>{(0,l.useEffect)((()=>{(0,v.ce)("gla_modal_open",{context:p.K4.SUBMISSION_SUCCESS}),Ee.A.set(p.rS.CAN_ONBOARDING_SETUP_CES_PROMPT_OPEN,!0)}),[]);const e=(0,l.useCallback)((()=>p.Th.adsSetupComplete?(0,a.createElement)(h.A,{isPrimary:!0,"data-action":"view-product-feed",onClick:Ae},(0,n.__)("View product feed","google-listings-and-ads")):(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{className:"gla-submission-success-guide__space_holder"}),(0,a.createElement)(h.A,{isSecondary:!0,"data-action":"maybe-later",onClick:Ae},(0,n.__)("Maybe later","google-listings-and-ads")),(0,a.createElement)(pe.A,{isPrimary:!0,isSecondary:!1,isSmall:!1,eventName:be,eventProps:{context:p.K4.SUBMISSION_SUCCESS,action:"create-paid-campaign"}},(0,n.__)("Create campaign","google-listings-and-ads")))),[]);return(0,a.createElement)(me,{className:"gla-submission-success-guide",backButtonText:(0,n.__)("Back","google-listings-and-ads"),pages:we,renderFinish:e,onFinish:Ae})};var Ne=s(1787),Ce=s(614);const Se=()=>{const e={strong:(0,a.createElement)("strong",null)};return(0,a.createElement)(u.A,{id:"product-status"},(0,a.createElement)("p",null,(0,l.createInterpolateElement)((0,n.__)("Your product feed is <strong>automatically synced</strong> from WooCommerce to Google, every 1-2 days. ","google-listings-and-ads"),e)),(0,a.createElement)("p",null,(0,l.createInterpolateElement)((0,n.__)("<strong>‘Not synced’ products</strong> do not appear in Google listings. They are queued for submission, or they may be ineligible or excluded from the product feed.","google-listings-and-ads"),e)),(0,a.createElement)("p",null,(0,l.createInterpolateElement)((0,n.__)("After submission, Google assigns each product a status: <strong>Active, Expiring, Pending, or Disapproved.</strong>","google-listings-and-ads"),e)),(0,a.createElement)("p",null,(0,l.createInterpolateElement)((0,n.__)("<strong>‘Active’ products</strong> are fully approved and eligible to appear in free listings on Google.","google-listings-and-ads"),e)),(0,a.createElement)("p",null,(0,l.createInterpolateElement)((0,n.__)("<strong>‘Expiring’ products</strong> will become inactive and no longer appear in Google listings in the next 3 days.","google-listings-and-ads"),e)),(0,a.createElement)("p",null,(0,l.createInterpolateElement)((0,n.__)("<strong>‘Pending’ products</strong> are being processed by Google. They will not appear in listings until they are approved.","google-listings-and-ads"),e)),(0,a.createElement)("p",null,(0,l.createInterpolateElement)((0,n.__)("<strong>‘Disapproved’ products</strong> are inactive and do not appear in Google listings.","google-listings-and-ads"),e)),(0,a.createElement)("p",null,(0,l.createInterpolateElement)((0,n.__)("<link>Read more about product sync and statuses</link>","google-listings-and-ads"),{link:(0,a.createElement)(m.A,{context:"product-feed",linkId:"product-sync-statuses",href:"https://support.google.com/merchants/answer/160491"})})))},Pe=({icon:e,title:t,label:s,description:n,className:l})=>(0,a.createElement)(r.Flex,{className:l,justify:"normal",gap:1},(0,a.createElement)(r.FlexItem,null,t),(0,a.createElement)(r.FlexItem,{className:"gla-status__icon"},e),(0,a.createElement)(r.FlexItem,null,(0,a.createElement)("span",{className:"gla-status__label"},s),(0,a.createElement)("span",{className:"gla-status__description"},n)));var Ie=s(9369),xe=s(3376);const qe=function(){const{data:e,hasFinishedResolution:t}=(0,K.A)("getMCProductStatistics");if(!t||!e?.statistics)return null;const{Icon:s,status:l,description:o}=function({scheduled_sync:e,statistics:t,timestamp:s,loading:a}){if(0!==e||a)return{Icon:M.A,status:(0,n.__)("Sync in progress","google-listings-and-ads"),description:null};const l=(0,Ie.A)(t);return{Icon:z.A,status:(0,n.__)("Automatically synced to Google","google-listings-and-ads"),description:(0,n.sprintf)(
// translators: %s: datetime of last update products sync status, and %d: number of synced products, with minimum value of 1.
// translators: %s: datetime of last update products sync status, and %d: number of synced products, with minimum value of 1.
(0,n._n)("Last updated: %1$s, containing %2$d product","Last updated: %1$s, containing %2$d products",l,"google-listings-and-ads"),(0,$.format)(xe.Z,new Date(1e3*s)),l)}}(e);return(0,a.createElement)(Pe,{title:(0,n.__)("Sync with Google:","google-listings-and-ads"),icon:(0,a.createElement)(s,{className:"gla-success",size:24}),label:(0,a.createElement)("span",{className:"gla-success"},l),description:o})},Re=function({refreshStats:e,error:t}){return(0,a.createElement)(Pe,{title:(0,n.__)("Overview Stats:","google-listings-and-ads"),icon:(0,a.createElement)(b.A,{size:24}),label:(0,a.createElement)(h.A,{"aria-label":t,onClick:e,className:"overview-stats-error-button",eventName:"gla_retry_loading_product_stats"},(0,n.__)("There was an error loading the Overview Stats. Click to retry.","google-listings-and-ads")),description:t})},Fe=function(){const{total:e}=(0,T.A)(),t=(s=e,Number.isInteger(s)?0===s?(0,n.__)("No issues to resolve 🎉","google-listings-and-ads"):(0,n.sprintf)(
// translators: %d: number of unsolved Merchant Center issues, with minimum value of 1.
// translators: %d: number of unsolved Merchant Center issues, with minimum value of 1.
(0,n._n)("%d issue to resolve","%d issues to resolve",s,"google-listings-and-ads"),s):"");var s;return(0,a.createElement)(Pe,{title:(0,n.__)("Feed setup:","google-listings-and-ads"),icon:(0,a.createElement)(z.A,{size:24}),label:(0,a.createElement)("span",{className:"gla-success"},(0,n.__)("Free listings setup completed","google-listings-and-ads")),description:t})},Te=()=>{const e=(0,K.A)("getMCReviewRequest");if(!e.hasFinishedResolution||!e.data?.status)return null;const t=Y[e.data.status];return t?(0,a.createElement)(Pe,{className:"gla-account-status",title:(0,n.__)("Account status:","google-listings-and-ads"),icon:t.icon,label:t.status,description:t.statusDescription}):null};var Ge=s(1209);const Le=()=>{const{data:e}=(0,Ce.A)(),{loaded:t,data:s}=(0,Ge.A)();return!e?.statistics?.active||!t||s?.length>0?null:(0,a.createElement)(r.Flex,{className:"gla-ads-inline-notice"},(0,a.createElement)(r.FlexItem,null,(0,a.createElement)("p",null,(0,n.__)("You have approved products. Create a Google Ads campaign to reach more customers and drive more sales.","google-listings-and-ads")),(0,a.createElement)(pe.A,{isSmall:!1,eventProps:{context:"product-feed-overview-promotion"}},(0,n.__)("Create Campaign","google-listings-and-ads"))))};var De=s(3741);const Oe=()=>{const{hasFinishedResolution:e,data:t,refreshStats:s}=(0,Ce.A)();if(e&&!t)return(0,n.__)("An error occurred while retrieving your product feed. Please try again later.","google-listings-and-ads");const l=!e||t?.loading;let o={};return l&&(o={children:(0,a.createElement)(De.A,null)}),(0,a.createElement)(r.Card,{className:"gla-product-statistics"},(0,a.createElement)(r.CardHeader,{justify:"normal"},(0,a.createElement)(r.FlexItem,null,(0,a.createElement)(k.A,{variant:"title-small",as:"h2"},(0,n.__)("Overview","google-listings-and-ads"))),(0,a.createElement)(Se,null)),(0,a.createElement)(r.CardBody,{className:"gla-product-statistics__summaries",size:null},!e&&(0,a.createElement)(_.SummaryListPlaceholder,{numberOfItems:5}),e&&(0,a.createElement)(_.SummaryList,null,(()=>[(0,a.createElement)(_.SummaryNumber,{key:"active",label:(0,n.__)("Active","google-listings-and-ads"),value:l?"":t?.statistics?.active,...o}),(0,a.createElement)(_.SummaryNumber,{key:"expiring",label:(0,n.__)("Expiring","google-listings-and-ads"),value:l?"":t?.statistics?.expiring,...o}),(0,a.createElement)(_.SummaryNumber,{key:"pending",label:(0,n.__)("Pending","google-listings-and-ads"),value:l?"":t?.statistics?.pending,...o}),(0,a.createElement)(_.SummaryNumber,{key:"disapproved",label:(0,n.__)("Disapproved","google-listings-and-ads"),value:l?"":t?.statistics?.disapproved,...o}),(0,a.createElement)(_.SummaryNumber,{key:"not_synced",label:(0,n.__)("Not Synced","google-listings-and-ads"),value:l?"":t?.statistics?.not_synced,...o})]))),(0,a.createElement)(r.CardFooter,{gap:0},(0,a.createElement)(Le,null),(0,a.createElement)(Fe,null),(0,a.createElement)(qe,null),(0,a.createElement)(Te,null),e&&t?.error&&(0,a.createElement)(Re,{refreshStats:s,error:t.error})))};var Be=s(3921),$e=s(5246);const ze=()=>{const[e,t]=(0,l.useState)(!1),s=(0,o.getQuery)()?.guide===p.K4.SUBMISSION_SUCCESS,r=(0,Be.A)();return(0,l.useEffect)((()=>{if(!e){const e=Ee.A.get(p.rS.CAN_ONBOARDING_SETUP_CES_PROMPT_OPEN);t(!s&&e&&r)}}),[s,e,r]),(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.A,null),(0,a.createElement)($e.A,null),s&&(0,a.createElement)(ke,null),e&&(0,a.createElement)(Ne.A,{label:(0,n.__)("How easy was it to set up Google for WooCommerce?","google-listings-and-ads"),secondLabel:(0,n.__)("How easy was it to understand the requirements for the Google for WooCommerce setup?","google-listings-and-ads"),eventContext:p.K4.SUBMISSION_SUCCESS}),(0,a.createElement)("div",{className:"gla-product-feed"},(0,a.createElement)(Oe,null),(0,a.createElement)(Q,null),(0,a.createElement)(ie,{trackEventReportId:"product-feed"})))}}}]);