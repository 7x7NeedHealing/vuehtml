import {createRouter, createWebHashHistory} from "vue-router";
import zhuye from "@/pages/zhuye";
import zhaoxuexiao from "@/pages/zhaoxuexiao";
import founding from "@/pages/founding";
import zonghepaixu from "@/pages/zhaoxuexiao-pages/zonghe/zonghepaixu";
import renqizuigao from "@/pages/zhaoxuexiao-pages/renqi/renqizuigao";
import pingjiazuigao from "@/pages/zhaoxuexiao-pages/pingjia/pingjiazuigao";
import wechatQR from "@/components/wechatQR";
import haoxiao from "@/pages/zhaoxuexiao-pages/haoxiao";
import gangqingone from "@/pages/zhaoxuexiao-pages/gangqingone";
import allcomments from "@/components/allcomments";
import newcomments from "@/components/newcomments";
import QAcommunity from "@/pages/QA/QAcommunity";
import litailizi from "@/pages/zhaoxuexiao-pages/litailizi";
import ef from "@/pages/zhaoxuexiao-pages/ef";
import legalNotices from "@/components/legalNotices";
import QAall from "@/pages/QA/QAall";
import QAzixun from "@/pages/QA/QAzixun";
import QAbug from "@/pages/QA/QAbug";
import QAfunction from "@/pages/QA/QAfunction";
import QAteach from "@/pages/QA/QAteach";
import QAtalking from "@/pages/QA/QAtalking";
import QAother from "@/pages/QA/QAother";
import quxuezhuanti from "@/pages/quxuezhuanti";
import tongcengjiaoyu from "@/pages/zhaoxuexiao-pages/tongcengjiaoyu";
import newWorld from "@/pages/zhaoxuexiao-pages/newWorld";
import jiewu from "@/pages/zhaoxuexiao-pages/jiewu";

const routes=[
    {
        /*默认页面为主页*/
        path: "/",
        redirect: "/zhuye",
    },
    {
        path:'/zhuye',
        component:zhuye,
    },
    {
        path:'/wechatQR',
        component: wechatQR
    },
    {
        path: '/zhaoxuexiao',
        component: zhaoxuexiao,
        children:[
            {
                path: '',
                redirect: '/zhaoxuexiao/haoxiao/zonghepaixu'
            },
            {
                path:'haoxiao',
                component:haoxiao,
                children:[

                    {
                        path:'zonghepaixu',
                        component:zonghepaixu
                    },
                    {
                        path:'renqizuigao',
                        component: renqizuigao
                    },
                    {
                        path: 'pingjiazuigao',
                        component: pingjiazuigao
                    }
                ]
            },
            {
                path: 'gangqingone',
                component: gangqingone,
                children: [
                    {
                        path: 'allcomments',
                        component: allcomments
                    },
                    {
                        path: 'newcomments',
                        component: newcomments
                    }
                ]
            },
            {
                path: 'litailizi',
                component: litailizi,
                children: [
                    {
                        path: 'allcomments',
                        component: allcomments
                    },
                    {
                        path: 'newcomments',
                        component: newcomments
                    }
                ]
            },
            {
                path: 'ef',
                component: ef,
                children: [
                    {
                        path: 'allcomments',
                        component: allcomments
                    },
                    {
                        path: 'newcomments',
                        component: newcomments
                    }
                ]
            },
            {
                path: 'tongcengjiaoyu',
                component: tongcengjiaoyu,
                children: [
                    {
                        path: 'allcomments',
                        component: allcomments
                    },
                    {
                        path: 'newcomments',
                        component: newcomments
                    }
                ]
            },
            {
                path: 'newWorld',
                component: newWorld,
                children: [
                    {
                        path: 'allcomments',
                        component: allcomments
                    },
                    {
                        path: 'newcomments',
                        component: newcomments
                    }
                ]
            },
            {
                path: 'jiewu',
                component: jiewu,
                children: [
                    {
                        path: 'allcomments',
                        component: allcomments
                    },
                    {
                        path: 'newcomments',
                        component: newcomments
                    }
                ]
            }
        ]
    },
    {
        path:'/QAcommunity',
        component: QAcommunity,
        children: [
            {
                path: '',
                redirect:'/QAcommunity/QAall'
            },
            {
                path: 'QAall',
                component: QAall
            },
            {
                path:'QAzixun' ,
                component: QAzixun
            },
            {
                path: 'QAbug',
                component:QAbug
            },
            {
                path:'QAfunction' ,
                component:QAfunction
            },
            {
                path: 'QAteach',
                component:QAteach
            },
            {
                path: 'QAtalking',
                component:QAtalking
            },
            {
                path: 'QAother',
                component: QAother
            }
        ]
    },
    {
        path: '/jianshezhong',
        component: founding
    },
    {
        path: '/legalNotices',
        component: legalNotices
    },
    {
        path: '/quxuezhuanti',
        component: quxuezhuanti
    }
]
const  router=createRouter({
        history:createWebHashHistory(),
        routes
    }

)
//经路由管理器对外抛出
export default router;
