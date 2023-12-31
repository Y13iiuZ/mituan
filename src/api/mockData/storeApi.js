export default {
    getStoreData:()=>{
        return {
            code:200,
            data:[
                {
                    name:"点菜",
                    data:{
                        content:"点菜",
                        items:[
                            {
                                text:"热销套餐",
                                children:[
                                    {
                                        pic:"http://5b0988e595225.cdn.sohucs.com/images/20180327/00c319222b514e63939f2ab03d74e29e.jpeg",
                                        title:"猪脚饭",
                                        num:0,
                                        price:25.0,
                                        id:1,
                                        add:true,
                                    },
                                    {
                                        pic:"http://5b0988e595225.cdn.sohucs.com/images/20180327/00c319222b514e63939f2ab03d74e29e.jpeg",
                                        title:"猪脚饭",
                                        num:0,
                                        price:25.0,
                                        id:2,
                                        add:true,
                                    },
                                ],
                            },
                            {
                                text:"超级折扣",
                                children:[
                                    {
                                        pic:"http://5b0988e595225.cdn.sohucs.com/images/20180327/00c319222b514e63939f2ab03d74e29e.jpeg",
                                        title:"猪脚+肥牛双拼",
                                        num:0,
                                        price:25.0,
                                        id:5,
                                        add:true,
                                    },
                                    {
                                        pic:"http://5b0988e595225.cdn.sohucs.com/images/20180327/00c319222b514e63939f2ab03d74e29e.jpeg",
                                        title:"香辣酸菜鱼+肥牛双拼",
                                        num:0,
                                        price:25.0,
                                        id:6,
                                        add:true,
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    name:"评价",
                    data:{
                        content:"评价",
                    },
                },
                {
                    name:"商家",
                    data:{
                        content:"商家",
                    },
                },
            ]
        }
     }
}