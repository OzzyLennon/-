export const MAX_DAOCAI = 3; // Game over if Boos reach this
export const MAX_TURNS = 12; // Initial maximum number of turns
export const ENCORE_THRESHOLD = 15; // Score needed to trigger encore option
export const ENCORE_TURNS_ADDED = 6; // How many turns to add on encore

export const TOPICS = [
  "报菜名 (Listing Dishes)",
  "地理图 (Geography Map)",
  "论捧逗 (On Teasing and Praising)",
  "学外语 (Foreign Languages)",
  "神医 (The Miracle Doctor)",
  "对春联 (Spring Couplets)",
  "超级发明家 (The Great Inventor)"
];

// Interface helper for the script data structure (implicit in TS, but good for reference)
// reactions: key is option ID, value is the Dougen's immediate response line before moving on.

// Offline Scripts Data (Multiple Scenarios)
export const OFFLINE_SCRIPTS = [
  // Script 1: 报菜名 (Classic) - Enhanced with Reactions
  {
    topic: "报菜名 (贯口练习)",
    turns: [
      {
        dougen: "今天我心情好，我请您吃饭！",
        options: [
          { id: "B", text: "吃什么？" },
          { id: "A", text: "哎呦，那敢情好啊！" }, // Best
          { id: "D", text: "你欠我钱还没还呢。" },
          { id: "C", text: "我不饿。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "提那壶不开提那壶！今儿不提钱的事，单说吃饭！",
          "C": "不饿也得吃，我请客您不赏脸吗？",
          "B": "您先别急着问吃什么，听我安排。"
        }
      },
      {
        dougen: "咱们去那个——大饭店！",
        options: [
          { id: "C", text: "我不去。" },
          { id: "A", text: "嚯，够讲究的！" }, // Best
          { id: "B", text: "沙县小吃？" },
          { id: "D", text: "别吹牛了。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "B": "沙县？那叫大饭店吗？那叫便饭！",
          "C": "怎么又不去了？刚才不是说好了吗。",
          "D": "谁吹牛了？我是真去！"
        }
      },
      {
        dougen: "先来点凉菜：五香酱鸡、腊肉、松花小肚儿、晾肉、香肠...",
        options: [
          { id: "B", text: "哦，还有呢？" },
          { id: "D", text: "这也太油了吧。" },
          { id: "A", text: "这都是下酒的好菜！" }, // Best
          { id: "C", text: "我不吃凉的。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "C": "不吃凉的您等热菜啊！",
          "D": "嫌油您别吃啊，我自个儿吃！",
          "B": "您别急，这才刚开始报。"
        }
      },
      {
        dougen: "热菜那就更多了：蒸羊羔、蒸熊掌、蒸鹿尾儿、烧花鸭、烧雏鸡、烧子鹅...",
        options: [
          { id: "A", text: "嚯！这嘴皮子真利索！" }, // Best
          { id: "C", text: "慢点说，我记不住。" },
          { id: "B", text: "听着就好吃。" },
          { id: "D", text: "别背了，烦死人。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "嫌烦您把耳朵堵上！这是艺术！",
          "C": "记不住没关系，主要是听这贯口的气势。",
          "B": "光听有什么用？得吃啊！"
        }
      },
      {
        dougen: "卤猪、卤鸭、酱鸡、腊肉、松花小肚儿、晾肉、香肠...",
        options: [
          { id: "D", text: "你是复读机啊？" },
          { id: "A", text: "您这是饿疯了吧？怎么又绕回去了？" }, // Best
          { id: "B", text: "刚才不是说过了吗？" },
          { id: "C", text: "我要回家。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "嗨！我这不是背顺嘴了吗。",
          "B": "对，刚才说过，我这不想着让您多吃点吗。",
          "C": "回什么家！菜还没上齐呢！"
        }
      },
      {
        dougen: "什锦苏盘、熏鸡白肚儿、清蒸八宝猪、江米酿鸭子...",
        options: [
          { id: "C", text: "我不喜欢鸭子。" },
          { id: "B", text: "我要喝水。" },
          { id: "D", text: "闭嘴！" },
          { id: "A", text: "好家伙，这一口气儿下来的！" } // Best
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "您怎么老让我闭嘴？我是逗哏的！",
          "B": "喝什么水，先吃菜！",
          "C": "挑肥拣瘦的，有的吃不错了。"
        }
      },
      {
        dougen: "服务员！这就上菜！",
        options: [
          { id: "B", text: "等等。" },
          { id: "A", text: "哎，咱们这就开吃！" }, // Best
          { id: "D", text: "你疯了吧，这是舞台。" },
          { id: "C", text: "哪里有服务员？" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "舞台怎么了？舞台上也是无实物表演！",
          "C": "假装有嘛！您得配合我。",
          "B": "等什么？菜都凉了！"
        }
      },
      {
        dougen: "菜上齐了，您看这一桌子，色香味俱全！",
        options: [
          { id: "A", text: "真香！那我动筷子了？" }, // Best
          { id: "C", text: "我看不到。" },
          { id: "B", text: "空气啊？" },
          { id: "D", text: "骗子！" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "怎么就骗子了？我这叫精神会餐！",
          "B": "空气怎么了？空气也有香气！",
          "C": "用心看！"
        }
      },
      {
        dougen: "哎等等，吃之前咱们得先算算账。",
        options: [
          { id: "D", text: "我就知道你没安好心。" },
          { id: "B", text: "多少钱？" },
          { id: "A", text: "怎么着？不是您请客吗？" }, // Best
          { id: "C", text: "我没带钱。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "什么叫没安好心？亲兄弟还得明算账呢。",
          "B": "钱不钱的伤感情，主要是谁掏钱的问题。",
          "C": "没带钱您敢坐这儿吃？"
        }
      },
      {
        dougen: "我出门急，忘带钱包了，今儿这顿您先垫上？",
        options: [
          { id: "B", text: "啊？" },
          { id: "C", text: "那我不吃了。" },
          { id: "A", text: "合着您是请客我掏钱啊！" }, // Best
          { id: "D", text: "我打死你个骗吃骗喝的！" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "别动手！君子动口不动手！",
          "C": "菜都上了，不吃也得给钱！",
          "B": "别惊讶，下回我请您！"
        }
      },
      // --- Extended Content for Encore ---
      {
        dougen: "其实这都不重要，关键是这份心意！",
        options: [
          { id: "C", text: "心意能当饭吃吗？" },
          { id: "A", text: "您这心意太贵，我领不起。" }, // Best
          { id: "B", text: "行吧。" },
          { id: "D", text: "滚！" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "怎么又骂人？有没有素质！",
          "C": "俗了不是？谈钱就俗了。",
          "B": "您答应了？太好了！"
        }
      },
      {
        dougen: "那咱们换个地儿？去吃西餐？",
        options: [
          { id: "A", text: "您还是没钱啊。" }, // Best
          { id: "D", text: "吃死你。" },
          { id: "B", text: "西餐好。" },
          { id: "C", text: "我不喜欢用刀叉。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "您怎么老盼着我死啊？",
          "B": "西餐洋气！符合咱的气质。",
          "C": "那就用手抓！"
        }
      },
      {
        dougen: "我认识那大厨，能赊账！",
        options: [
          { id: "B", text: "那快去。" },
          { id: "A", text: "您这脸皮是真厚。" }, // Best
          { id: "C", text: "大厨叫什么？" },
          { id: "D", text: "不要脸。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "这叫人脉！",
          "C": "大厨叫...我忘了，反正认识。",
          "B": "走着！"
        }
      },
      {
        dougen: "只有一道菜，叫“法式焗蜗牛”。",
        options: [
          { id: "A", text: "哟，还挺高档。" }, // Best
          { id: "C", text: "我不吃虫子。" },
          { id: "B", text: "蜗牛？" },
          { id: "D", text: "恶心。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "这叫美食！没口福。",
          "C": "那不是虫子，那是肉！",
          "B": "对，带壳的那种。"
        }
      },
      {
        dougen: "我一口气能吃二百个！",
        options: [
          { id: "B", text: "真能吃。" },
          { id: "A", text: "您那是吃蜗牛还是嗑瓜子呢？" }, // Best
          { id: "D", text: "吹牛逼。" },
          { id: "C", text: "别撑死。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "怎么又吹牛？我是饭量大！",
          "C": "撑不死，我消化好。",
          "B": "那当然，我这肚子是宰相肚里能撑船。"
        }
      },
      {
        dougen: "吃完蜗牛，再来瓶82年的雪碧。",
        options: [
          { id: "C", text: "我要可乐。" },
          { id: "D", text: "过期了吧！" },
          { id: "B", text: "好喝吗？" },
          { id: "A", text: "雪碧有82年的吗？" } // Best
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "酒是陈的香，雪碧也是陈的甜！",
          "C": "可乐没有，只有82年的凉白开。",
          "B": "透心凉，心飞扬！"
        }
      },
      {
        dougen: "晃一晃，那气儿足！",
        options: [
          { id: "A", text: "小心别崩一身。" }, // Best
          { id: "D", text: "炸死你。" },
          { id: "B", text: "多晃晃。" },
          { id: "C", text: "我看看。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "您怎么这么暴力呢...",
          "B": "越晃越好喝！",
          "C": "离远点，别溅身上。"
        }
      },
      {
        dougen: "喝完这一杯，咱们就是生死之交了！",
        options: [
          { id: "B", text: "干杯！" },
          { id: "C", text: "谁跟你是朋友。" },
          { id: "A", text: "为了骗顿饭，至于吗？" }, // Best
          { id: "D", text: "再见。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "别走啊！还没结账呢！",
          "C": "一回生二回熟嘛。",
          "B": "感情深，一口闷！"
        }
      }
    ]
  },
  // Script 2: 论捧逗
  {
    topic: "论捧逗 (职业素养)",
    turns: [
      {
        dougen: "相声讲究的是三分逗，七分捧。",
        options: [
          { id: "C", text: "我就喜欢听逗哏的。" },
          { id: "A", text: "哎，这话对，捧哏重要。" }, // Best
          { id: "B", text: "是吗？我看差不多。" },
          { id: "D", text: "那你下去，我来逗。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "您来不了！这得有技术！",
          "C": "没捧哏的，逗哏的就成疯子了。",
          "B": "差远了，捧哏是根基。"
        }
      },
      {
        dougen: "您看这舞台上，我虽然站桌子外面，没您我可不行。",
        options: [
          { id: "B", text: "那是，没我你吃不上饭。" },
          { id: "A", text: "您太客气了，互相帮衬。" }, // Best
          { id: "D", text: "我是你爸爸。" },
          { id: "C", text: "你知道就行。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "别占便宜！我是说艺术上不行！",
          "B": "我不吃饭，我吃艺术。",
          "C": "我当然知道，所以得夸夸您。"
        }
      },
      {
        dougen: "比方说今天这场，没有您这一句句接着，我这包袱它响不了啊！",
        options: [
          { id: "D", text: "你说的本来就不好笑。" },
          { id: "B", text: "那给钱的时候多分我点？" },
          { id: "C", text: "快点说，别墨迹。" },
          { id: "A", text: "嗨，都是为了伺候好观众。" } // Best
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "不好笑那是您没捧好！",
          "B": "谈钱多俗啊，谈艺术！",
          "C": "别急啊，铺垫铺垫。"
        }
      },
      {
        dougen: "所以说，这就叫：红花还得绿叶扶！",
        options: [
          { id: "A", text: "哎，哪怕我是那片叶子呢。" }, // Best
          { id: "C", text: "谁是花谁是叶？" },
          { id: "B", text: "我是红花，你是叶子。" },
          { id: "D", text: "我是那花盆！" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "花盆？那您得顶着土！",
          "B": "您长得像叶子。",
          "C": "这还用问吗？显然我是花。"
        }
      },
      {
        dougen: "咱们做个试验，我不说话，您自己能演吗？",
        options: [
          { id: "B", text: "我试试。" },
          { id: "D", text: "废话。" },
          { id: "A", text: "那哪行啊，一个人那是单口。" }, // Best
          { id: "C", text: "能啊。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "怎么就废话了？您演一个我看看？",
          "B": "您试什么试，您会吗？",
          "C": "您能您来！"
        }
      },
      {
        dougen: "（沉默 staring at you）...",
        options: [
          { id: "C", text: "你看我干嘛？" },
          { id: "A", text: "您倒是说话呀！" }, // Best
          { id: "D", text: "哑巴啦？" },
          { id: "B", text: "..." }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "没哑巴！我是让您演！",
          "B": "您也别不说话啊，冷场了！",
          "C": "我等您开口呢！"
        }
      },
      {
        dougen: "看吧，我不说话，您就傻了吧？",
        options: [
          { id: "D", text: "你才傻！" },
          { id: "B", text: "我不傻。" },
          { id: "A", text: "嗨！您这是故意晾我呢！" }, // Best
          { id: "C", text: "没意思。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "急了不是？这是证明我重要！",
          "B": "呆若木鸡还不傻？",
          "C": "这就看出差距了。"
        }
      },
      {
        dougen: "其实咱们俩的关系，就好比父子一样亲密。",
        options: [
          { id: "C", text: "确实亲密。" },
          { id: "D", text: "谁跟你是父子。" },
          { id: "B", text: "我是父，你是子。" },
          { id: "A", text: "那是...哎等会儿，谁是父谁是子？" } // Best
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "比喻！这是比喻！",
          "B": "反了！",
          "C": "既然亲密，那叫声爸爸听听？"
        }
      },
      {
        dougen: "当然我是长辈了，我得照顾您。",
        options: [
          { id: "B", text: "谢谢爸爸。" },
          { id: "A", text: "去你的吧！这就占便宜来了！" }, // Best
          { id: "D", text: "滚！" },
          { id: "C", text: "哦。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "真没礼貌。",
          "B": "哎！乖儿子！...不对，您这答应得也太快了。",
          "C": "这也没反应？默认了？"
        }
      },
      {
        dougen: "开个玩笑！其实咱们是焦不离孟，孟不离焦。",
        options: [
          { id: "D", text: "别往回找补了。" },
          { id: "B", text: "谁是香蕉？" },
          { id: "A", text: "这还像句人话。" }, // Best
          { id: "C", text: "我不姓孟。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "什么找补，这是典故！",
          "B": "什么香蕉！是焦赞和孟良！",
          "C": "比喻！您这文化水平太低。"
        }
      },
      // --- Extended Content for Encore ---
      {
        dougen: "既然咱们这么亲，那我借您点钱花花？",
        options: [
          { id: "B", text: "借多少？" },
          { id: "D", text: "穷鬼。" },
          { id: "A", text: "提钱伤感情。" }, // Best
          { id: "C", text: "我没钱。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "您怎么张嘴就骂人？",
          "B": "有多少借多少！",
          "C": "没钱去取啊。"
        }
      },
      {
        dougen: "咱们谈艺术！我会唱太平歌词。",
        options: [
          { id: "A", text: "哟，那您来一段。" }, // Best
          { id: "C", text: "那是啥？" },
          { id: "D", text: "别唱了。" },
          { id: "B", text: "我不听。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "必须唱！",
          "B": "不听也得听！",
          "C": "相声基本功都不知道？"
        }
      },
      {
        dougen: "(清嗓子) 咳咳咳...咳咳咳...",
        options: [
          { id: "D", text: "痨病鬼。" },
          { id: "B", text: "喝口水。" },
          { id: "A", text: "您这是卡鸡毛了？" }, // Best
          { id: "C", text: "快唱。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "您这嘴太损了！",
          "B": "没水！",
          "C": "这就唱！"
        }
      },
      {
        dougen: "那杭州美景盖世无双~",
        options: [
          { id: "B", text: "唱得好。" },
          { id: "A", text: "哎，这是《白蛇传》。" }, // Best
          { id: "D", text: "难听。" },
          { id: "C", text: "跑调了。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "哪里难听了？这是味儿！",
          "B": "识货！",
          "C": "这叫韵味！"
        }
      },
      {
        dougen: "西湖岸边有只大灰狼~",
        options: [
          { id: "C", text: "狼吃蛇吗？" },
          { id: "B", text: "吓人。" },
          { id: "A", text: "哪来的狼啊！" }, // Best
          { id: "D", text: "胡说八道。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "艺术加工！",
          "B": "别怕，我保护你。",
          "C": "这狼它吃素！"
        }
      },
      {
        dougen: "狼看着白娘子，流口水~",
        options: [
          { id: "B", text: "恶心。" },
          { id: "D", text: "色狼。" },
          { id: "A", text: "那是许仙！" }, // Best
          { id: "C", text: "白娘子漂亮。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "什么色狼，那是爱情！",
          "B": "不恶心，那叫馋！",
          "C": "漂亮谁不喜欢？"
        }
      },
      {
        dougen: "后来俩人就打起来了。",
        options: [
          { id: "A", text: "乱套了全乱套了。" }, // Best
          { id: "C", text: "打得好。" },
          { id: "B", text: "谁赢了？" },
          { id: "D", text: "神经病。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "您才神经病！",
          "B": "狼赢了！",
          "C": "看热闹不嫌事大。"
        }
      },
      {
        dougen: "这就是艺术的加工！",
        options: [
          { id: "B", text: "高明。" },
          { id: "D", text: "下去吧！" },
          { id: "A", text: "您这是艺术的糟蹋。" }, // Best
          { id: "C", text: "我不懂。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "我不下！我还得返场呢！",
          "B": "您真会说话。",
          "C": "不懂慢慢学。"
        }
      }
    ]
  },
  // Script 3: 地理图 (Classic)
  {
    topic: "地理图 (吹牛游记)",
    turns: [
      {
        dougen: "我最近研究世界地理，准备周游列国。",
        options: [
          { id: "B", text: "您有护照吗？" },
          { id: "D", text: "梦游吧你？" },
          { id: "C", text: "就在家呆着吧。" },
          { id: "A", text: "嚯，您这是胸怀大志啊！" } // Best
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "不是梦游，是实地考察！",
          "B": "护照那是小事。",
          "C": "好男儿志在四方！"
        }
      },
      {
        dougen: "先去亚洲，再去欧洲，然后去美洲，最后去非洲。",
        options: [
          { id: "A", text: "好家伙，绕地球一圈！" }, // Best
          { id: "C", text: "我不去非洲。" },
          { id: "B", text: "机票挺贵的。" },
          { id: "D", text: "掉海里淹死你。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "您怎么不说点吉利话？",
          "C": "非洲热情啊！",
          "B": "不用机票！"
        }
      },
      {
        dougen: "咱们也不坐飞机，也不坐轮船。",
        options: [
          { id: "C", text: "走着去？" },
          { id: "A", text: "那您怎么去啊？" }, // Best
          { id: "B", text: "开车？" },
          { id: "D", text: "爬着去？" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "爬着多慢啊！",
          "C": "太累！",
          "B": "车过不去海！"
        }
      },
      {
        dougen: "我有神功，我这是腿着去！贴地飞行！",
        options: [
          { id: "D", text: "你是鬼啊？" },
          { id: "B", text: "吹吧你就。" },
          { id: "A", text: "那叫轻功！" }, // Best
          { id: "C", text: "累不累啊。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "神仙！什么鬼！",
          "B": "不信拉倒。",
          "C": "神功怎么会累？"
        }
      },
      {
        dougen: "到了那英国伦敦，我得去看看那大笨钟。",
        options: [
          { id: "A", text: "那是地标性建筑。" }, // Best
          { id: "C", text: "那钟坏了。" },
          { id: "B", text: "几点了？" },
          { id: "D", text: "你也挺笨的。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "怎么说话呢！",
          "B": "没工夫看时间，看钟！",
          "C": "坏了我也得看！"
        }
      },
      {
        dougen: "看完大笨钟，再去法国看看艾菲尔铁塔，然后在塔顶上...",
        options: [
          { id: "B", text: "跳下来？" },
          { id: "A", text: "往下看风景？" }, // Best
          { id: "C", text: "吃烤串？" },
          { id: "D", text: "随地大小便？" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "太不文明了！",
          "B": "不想活啦？",
          "C": "塔顶上不让摆摊！"
        }
      },
      {
        dougen: "不，在塔顶上给大伙儿表演一段相声！",
        options: [
          { id: "C", text: "警察抓你。" },
          { id: "A", text: "好嘛，把传统艺术带向世界！" }, // Best
          { id: "B", text: "谁听得懂啊？" },
          { id: "D", text: "你疯了吧！" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "这叫文化输出！",
          "B": "艺术无国界！",
          "C": "警察也爱听相声！"
        }
      },
      {
        dougen: "演完了我就直接跳到美国去，看那个自由女神像。",
        options: [
          { id: "B", text: "游过去？" },
          { id: "D", text: "摔死你。" },
          { id: "A", text: "这跨度可够大的！" }, // Best
          { id: "C", text: "我不去美国。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "我有神功护体！",
          "B": "跳过去！一步跨过去！",
          "C": "闭着眼就到了。"
        }
      },
      {
        dougen: "我看那自由女神手里举着个东西。",
        options: [
          { id: "C", text: "手机？" },
          { id: "A", text: "那叫火炬，象征自由。" }, // Best
          { id: "B", text: "冰激凌？" },
          { id: "D", text: "板砖？" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "板砖？那是去打架吗？",
          "C": "那时候哪有手机！",
          "B": "就知道吃。"
        }
      },
      {
        dougen: "我看像是一根大烟卷！",
        options: [
          { id: "D", text: "你才抽烟呢。" },
          { id: "B", text: "胡说八道。" },
          { id: "A", text: "嗨！您这什么眼神儿啊！" }, // Best
          { id: "C", text: "着火了。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "女神也抽烟！",
          "B": "看着就像嘛。",
          "C": "那是烟头亮着呢。"
        }
      },
      // --- Extended Content for Encore ---
      {
        dougen: "抽完烟，我直接跳进大西洋游泳。",
        options: [
          { id: "B", text: "水凉吗？" },
          { id: "A", text: "嚯！也不怕淹死。" }, // Best
          { id: "C", text: "我也去。" },
          { id: "D", text: "喂鱼去吧。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "鱼都不敢吃我！",
          "B": "凉快！",
          "C": "走起！"
        }
      },
      {
        dougen: "我游得快，后面有鲨鱼追我。",
        options: [
          { id: "A", text: "嚯，真刺激。" }, // Best
          { id: "C", text: "咬到了吗？" },
          { id: "B", text: "快跑。" },
          { id: "D", text: "活该。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "怎么说话呢？",
          "B": "跑着呢！",
          "C": "差一点！"
        }
      },
      {
        dougen: "我回头给鲨鱼讲了个笑话。",
        options: [
          { id: "D", text: "你脑子进水了。" },
          { id: "B", text: "什么笑话？" },
          { id: "A", text: "鲨鱼听得懂吗？" }, // Best
          { id: "C", text: "我不信。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "脑子进水也是海水！",
          "B": "单口相声！",
          "C": "鲨鱼也得娱乐。"
        }
      },
      {
        dougen: "鲨鱼笑得大牙都掉了。",
        options: [
          { id: "B", text: "哈哈。" },
          { id: "A", text: "您这牛吹得太大了。" }, // Best
          { id: "C", text: "不可能。" },
          { id: "D", text: "神经病。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "您不懂幽默！",
          "C": "真的掉了！",
          "B": "好笑吧？"
        }
      },
      {
        dougen: "游着游着，就到了南极。",
        options: [
          { id: "B", text: "南极好。" },
          { id: "D", text: "冻死你。" },
          { id: "A", text: "南极？那是大冰窟窿啊！" }, // Best
          { id: "C", text: "迷路了？" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "我不怕冷！",
          "C": "地球是圆的，怎么游都能到。",
          "B": "风景好。"
        }
      },
      {
        dougen: "南极有企鹅，由于太热，都光着膀子。",
        options: [
          { id: "A", text: "南极热？您发烧了吧！" }, // Best
          { id: "B", text: "是吗？" },
          { id: "C", text: "全球变暖？" },
          { id: "D", text: "胡扯。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "真的！我都看见了！",
          "B": "那是相当热。",
          "C": "可能吧。"
        }
      },
      {
        dougen: "它们在那儿吃火锅呢。",
        options: [
          { id: "B", text: "什么馅的？" },
          { id: "A", text: "企鹅吃火锅？" }, // Best
          { id: "C", text: "带我一个。" },
          { id: "D", text: "疯了。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "没疯！",
          "B": "鱼肉馅的！",
          "C": "没筷子了。"
        }
      },
      {
        dougen: "涮的还是那只鲨鱼！",
        options: [
          { id: "C", text: "真残忍。" },
          { id: "D", text: "下去吧！" },
          { id: "B", text: "好吃吗？" },
          { id: "A", text: "越说越离谱了！" } // Best
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "别赶我走啊！",
          "B": "鲜！",
          "C": "弱肉强食嘛。"
        }
      }
    ]
  },
  // Script 4: 学外语 (New)
  {
    topic: "学外语 (怯口活)",
    turns: [
      {
        dougen: "我这个人呢，没别的爱好，就喜欢研究语言。",
        options: [
          { id: "B", text: "会说什么？" },
          { id: "A", text: "嚯，那您是语言学家！" }, // Best
          { id: "C", text: "说梦话吧。" },
          { id: "D", text: "别吹了。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "谁吹了？我是真爱研究！",
          "C": "梦话那是睡觉时候说的！",
          "B": "会的可多了，您听我慢慢道来。"
        }
      },
      {
        dougen: "不夸张地说，世界各国的语言，我精通八国！",
        options: [
          { id: "D", text: "吹牛不打草稿。" },
          { id: "B", text: "八国联军？" },
          { id: "A", text: "哪八国啊？" }, // Best
          { id: "C", text: "我不信。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "真才实学，怎么叫吹牛呢！",
          "B": "不是打仗！是语言！",
          "C": "不信您考考我。"
        }
      },
      {
        dougen: "英语、日语、法语、俄语、德语...我都行。",
        options: [
          { id: "A", text: "那您给大伙儿来两句英语？" }, // Best
          { id: "C", text: "快说。" },
          { id: "B", text: "说个日语听听。" },
          { id: "D", text: "闭嘴吧。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "闭嘴我还怎么展示？",
          "B": "英语还没说完呢，先说英语！",
          "C": "别急，这就来。"
        }
      },
      {
        dougen: "英语简单，见面打招呼叫：Good morning！",
        options: [
          { id: "C", text: "发音不准。" },
          { id: "B", text: "古德猫宁？" },
          { id: "A", text: "哎，这是早安。" }, // Best
          { id: "D", text: "这是拼音吧。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "什么拼音？标准伦敦音！",
          "B": "什么猫宁？没有猫！",
          "C": "这还不准？"
        }
      },
      {
        dougen: "晚上见面叫：Good Evening！",
        options: [
          { id: "A", text: "这是晚安。" }, // Best
          { id: "C", text: "没听过。" },
          { id: "B", text: "古德一吻定情？" },
          { id: "D", text: "傻子都知道。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "不仅仅是傻子，聪明人也知道！",
          "B": "什么定情？那叫Evening！",
          "C": "那您现在听过了。"
        }
      },
      {
        dougen: "要是见了仇人叫：Go Die！",
        options: [
          { id: "B", text: "去死？" },
          { id: "D", text: "你才去死。" },
          { id: "C", text: "太粗鲁了。" },
          { id: "A", text: "那是让人家去死啊！" } // Best
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "我没让您去死！我是说这句英文！",
          "B": "对，中文意思就是去死！",
          "C": "对仇人不用客气！"
        }
      },
      {
        dougen: "日语我更熟了，吃饭叫：以他打ki嘛死。",
        options: [
          { id: "C", text: "听不懂。" },
          { id: "A", text: "那是我开动了。" }, // Best
          { id: "B", text: "打死谁？" },
          { id: "D", text: "鬼子进村了。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "哪来的鬼子！这是日常用语。",
          "B": "不打人！是吃饭！",
          "C": "听不懂就学！"
        }
      },
      {
        dougen: "日语里那个“谢谢”叫：啊你个头！",
        options: [
          { id: "D", text: "胡说八道。" },
          { id: "B", text: "你头大？" },
          { id: "C", text: "骂人呢？" },
          { id: "A", text: "那叫‘阿里嘎多’！" } // Best
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "谐音！方便记忆！",
          "B": "头不大，是谢谢！",
          "C": "没骂人，是感谢。"
        }
      },
      {
        dougen: "我还懂韩语，韩语说话前都得加个“思密达”。",
        options: [
          { id: "B", text: "是吗？" },
          { id: "C", text: "我也会。" },
          { id: "D", text: "我不看韩剧。" },
          { id: "A", text: "倒是有这个语气词。" } // Best
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "韩剧里都有！",
          "B": "千真万确！",
          "C": "您也会？那咱俩练练。"
        }
      },
      {
        dougen: "比如“我饿了”，叫：肚子空空思密达。",
        options: [
          { id: "A", text: "您这韩语带唐山味儿啊！" }, // Best
          { id: "C", text: "不像。" },
          { id: "B", text: "哈哈。" },
          { id: "D", text: "瞎编。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "没瞎编！方言版韩语！",
          "C": "味儿不正？那我再练练。",
          "B": "严肃点，别笑场。"
        }
      },
      {
        dougen: "我还专门研究过“宇宙语”。",
        options: [
          { id: "C", text: "疯了吧。" },
          { id: "A", text: "嚯，这更高级了！外星人说的？" }, // Best
          { id: "B", text: "啥？" },
          { id: "D", text: "滚！" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "怎么又骂人？",
          "B": "宇宙语！UFO！",
          "C": "没疯！这是科学！"
        }
      },
      {
        dougen: "宇宙语打招呼是这样的：（怪叫）咕噜呱啦噼里啪啦蹦！",
        options: [
          { id: "D", text: "神经病。" },
          { id: "B", text: "吓我一跳。" },
          { id: "A", text: "您这是嘴里含着鞭炮呢？" }, // Best
          { id: "C", text: "什么玩意。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "您才神经病！这是艺术夸张！",
          "B": "别怕，友好的问候。",
          "C": "外星语言！"
        }
      },
      {
        dougen: "意思是：你好，地球人。",
        options: [
          { id: "B", text: "哦。" },
          { id: "A", text: "合着外星人说话费唾沫啊。" }, // Best
          { id: "C", text: "我不信。" },
          { id: "D", text: "骗鬼呢。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "没骗鬼，跟您（人）说话呢！",
          "B": "这回懂了吧？",
          "C": "真的！我翻译的。"
        }
      },
      {
        dougen: "你要是学会了宇宙语，就能跟UFO交流。",
        options: [
          { id: "A", text: "那人家不把您抓走切片研究吗？" }, // Best
          { id: "C", text: "我也学。" },
          { id: "B", text: "我想去。" },
          { id: "D", text: "快滚回火星吧。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "我回不去，没船票！",
          "B": "去哪？火星啊？危险！",
          "C": "跟我学！"
        }
      },
      // --- Encore: Animal Language ---
      {
        dougen: "其实这些都不难，最难的是‘兽语’。",
        options: [
          { id: "A", text: "哟，您还懂动物说话？" }, // Best
          { id: "B", text: "野兽？" },
          { id: "D", text: "你是禽兽吧。" },
          { id: "C", text: "吹吧。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "怎么说话呢？我是懂禽兽...不对，懂动物！",
          "B": "不光野兽，家禽也行。",
          "C": "不吹！"
        }
      },
      {
        dougen: "狗语最简单，见面就喊：汪汪汪！",
        options: [
          { id: "B", text: "这是咬人呢。" },
          { id: "A", text: "嗨，这谁不会啊。" }, // Best
          { id: "C", text: "好听。" },
          { id: "D", text: "别叫了。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "这就叫唤上了？",
          "B": "不咬人，摇尾巴呢。",
          "C": "那是相当悦耳。"
        }
      },
      {
        dougen: "猫语也容易：喵~",
        options: [
          { id: "A", text: "这也太也没技术含量了。" }, // Best
          { id: "B", text: "抓老鼠。" },
          { id: "D", text: "装可爱。" },
          { id: "C", text: "我也喵。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "不可爱吗？",
          "B": "没老鼠！",
          "C": "您也来？那成二重唱了。"
        }
      },
      {
        dougen: "最难的是鱼语，鱼说话听不见。",
        options: [
          { id: "B", text: "在水里嘛。" },
          { id: "A", text: "那怎么交流啊？" }, // Best
          { id: "C", text: "吐泡泡。" },
          { id: "D", text: "瞎扯。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "没瞎扯！",
          "B": "水里也有声音。",
          "C": "那是呼吸。"
        }
      },
      {
        dougen: "（鼓起腮帮子，只张嘴不出声，模仿鱼）...",
        options: [
          { id: "B", text: "中风了？" },
          { id: "A", text: "您这是吐泡泡呢！" }, // Best
          { id: "D", text: "恶心。" },
          { id: "C", text: "说啥呢？" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "不恶心！",
          "B": "没中风！模仿呢！",
          "C": "这不说着呢嘛！"
        }
      },
      {
        dougen: "这句意思是：这水有点咸！",
        options: [
          { id: "C", text: "那是海水鱼。" },
          { id: "B", text: "哈哈。" },
          { id: "A", text: "您是真尝了一口啊！" }, // Best
          { id: "D", text: "下去吧！" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "不下！还得返场呢！",
          "B": "严肃点！",
          "C": "对，咸水鱼！"
        }
      }
    ]
  },
  // Script 5: 神医
  {
    topic: "神医 (讽刺剧)",
    turns: [
      {
        dougen: "我家是祖传的医学世家，到我这是第十八代神医。",
        options: [
          { id: "B", text: "兽医？" },
          { id: "A", text: "失敬失敬，那是杏林高手！" }, // Best
          { id: "C", text: "我看像骗子。" },
          { id: "D", text: "贴电线杆子上的吧？" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "正规诊所！电线杆子上那是老军医！",
          "C": "如假包换！",
          "B": "兽医治得了吗人病？我治人的！"
        }
      },
      {
        dougen: "不管什么疑难杂症，我是一针见血，药到病除！",
        options: [
          { id: "A", text: "那是医术高明！" }, // Best
          { id: "C", text: "治死人了吗？" },
          { id: "B", text: "吹吧。" },
          { id: "D", text: "你是容嬷嬷啊？" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "容嬷嬷那是扎针，我是治病！",
          "C": "都活得好好的！",
          "B": "没吹！"
        }
      },
      {
        dougen: "昨天来了个病人，说头疼。",
        options: [
          { id: "B", text: "多喝热水。" },
          { id: "D", text: "砍了吧。" },
          { id: "A", text: "那得赶紧治。" }, // Best
          { id: "C", text: "不管他。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "砍了人就死了！",
          "B": "热水治百病啊？",
          "C": "医者父母心，怎么能不管？"
        }
      },
      {
        dougen: "我一看，这是脑子里有虫子！",
        options: [
          { id: "A", text: "啊？这都能看出来？" }, // Best
          { id: "C", text: "你脑子有虫。" },
          { id: "B", text: "寄生虫？" },
          { id: "D", text: "胡说。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "真的有！",
          "C": "您才有虫！我是医生！",
          "B": "对，就是那玩意儿！"
        }
      },
      {
        dougen: "我拿出一把大锤子，照着脑袋——咣！",
        options: [
          { id: "D", text: "报警了！" },
          { id: "A", text: "打死啦？！" }, // Best
          { id: "B", text: "啊？" },
          { id: "C", text: "好暴力。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "报什么警？这是物理麻醉！",
          "B": "别怕，我有分寸。",
          "C": "暴力祛病！"
        }
      },
      {
        dougen: "病人当时就不头疼了。",
        options: [
          { id: "B", text: "治好了？" },
          { id: "D", text: "庸医杀人！" },
          { id: "A", text: "废话，人都晕过去了还能疼吗！" }, // Best
          { id: "C", text: "神奇。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "没死！活着呢！",
          "B": "彻底不疼了！",
          "C": "神不神？"
        }
      },
      {
        dougen: "还有一个病人，说腿疼，走不动道。",
        options: [
          { id: "C", text: "截肢吧。" },
          { id: "A", text: "这得检查检查骨头。" }, // Best
          { id: "B", text: "坐轮椅。" },
          { id: "D", text: "别治了。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "必须治！",
          "C": "太草率了吧！",
          "B": "轮椅那是下策。"
        }
      },
      {
        dougen: "我给他开了一副药，叫“飞毛腿大力丸”。",
        options: [
          { id: "B", text: "好吃吗？" },
          { id: "A", text: "这名字听着就不靠谱。" }, // Best
          { id: "D", text: "假药！" },
          { id: "C", text: "多少钱？" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "祖传秘方！",
          "B": "不好吃，良药苦口。",
          "C": "谈钱伤感情。"
        }
      },
      {
        dougen: "吃完之后，那病人撒腿就跑！",
        options: [
          { id: "A", text: "神了！这就治好了？" }, // Best
          { id: "D", text: "回光返照吧。" },
          { id: "C", text: "我不信。" },
          { id: "B", text: "跑哪去了？" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "这是药效！",
          "C": "事实胜于雄辩。",
          "B": "不知道，反正跑得快！"
        }
      },
      {
        dougen: "我不跑不行啊，我那是泻药，他找厕所呢！",
        options: [
          { id: "C", text: "缺德。" },
          { id: "A", text: "嗨！您这是损人不利己啊！" }, // Best
          { id: "B", text: "哈哈哈。" },
          { id: "D", text: "打死你个庸医。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "别打！排毒！",
          "C": "这叫排毒疗法。",
          "B": "严肃点！"
        }
      },
      {
        dougen: "我还发明了一种“长生不老药”。",
        options: [
          { id: "B", text: "给我一颗。" },
          { id: "D", text: "做梦。" },
          { id: "C", text: "骗人。" },
          { id: "A", text: "这秦始皇都没求来啊。" } // Best
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "梦想是要有的！",
          "B": "没有了，就一颗。",
          "C": "童叟无欺！"
        }
      },
      {
        dougen: "成分主要是水泥和胶水。",
        options: [
          { id: "A", text: "那是把人糊成兵马俑啊！" }, // Best
          { id: "C", text: "能吃吗？" },
          { id: "B", text: "结实。" },
          { id: "D", text: "谋杀啊！" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "这叫永恒！",
          "C": "不能吃，外敷。",
          "B": "确实结实，风吹雨打都不怕。"
        }
      },
      // --- Encore: Plastic Surgery/Acupuncture ---
      {
        dougen: "除了内科，我还擅长美容整形。",
        options: [
          { id: "A", text: "嚯，您业务够广泛的！" }, // Best
          { id: "B", text: "整哪里？" },
          { id: "C", text: "我不需要。" },
          { id: "D", text: "毁容吧。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "整完就漂亮了！",
          "B": "全脸！",
          "C": "爱美之心人皆有之。"
        }
      },
      {
        dougen: "有个八十岁的老太太，嫌自己皱纹多。",
        options: [
          { id: "B", text: "爱美之心。" },
          { id: "A", text: "那您给拉个皮？" }, // Best
          { id: "C", text: "没办法。" },
          { id: "D", text: "老妖精。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "怎么说话呢？那是追求美！",
          "B": "对嘛！",
          "C": "我有办法！"
        }
      },
      {
        dougen: "我拿出一样神器，在她脸上熨了一遍。",
        options: [
          { id: "A", text: "熨斗啊？！" }, // Best
          { id: "C", text: "烫熟了。" },
          { id: "B", text: "什么神器？" },
          { id: "D", text: "杀人啦。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "没杀人！低温熨烫！",
          "B": "去皱神器！",
          "C": "没熟，脸皮厚。"
        }
      },
      {
        dougen: "皱纹是没了，就是脸有点糊味儿。",
        options: [
          { id: "B", text: "烤肉味？" },
          { id: "A", text: "这是做铁板烧呢！" }, // Best
          { id: "C", text: "太惨了。" },
          { id: "D", text: "丧尽天良。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "您不懂医术！",
          "B": "胶原蛋白的味道。",
          "C": "为了美，值得！"
        }
      },
      {
        dougen: "我还擅长针灸，一针下去，气都不喘了。",
        options: [
          { id: "C", text: "神医。" },
          { id: "A", text: "那是扎死人了！" }, // Best
          { id: "B", text: "扎哪了？" },
          { id: "D", text: "快跑。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "没跑！",
          "B": "死穴！",
          "C": "那是！"
        }
      },
      {
        dougen: "我的针稍微有点大，跟擀面杖差不多。",
        options: [
          { id: "B", text: "那么粗？" },
          { id: "A", text: "您这是给大象针灸呢！" }, // Best
          { id: "C", text: "可怕。" },
          { id: "D", text: "打死你。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "这叫定海神针！",
          "B": "效果好！",
          "C": "不可怕，治病嘛。"
        }
      }
    ]
  },
  // Script 6: 对春联
  {
    topic: "对春联 (文字游戏)",
    turns: [
      {
        dougen: "我是个文化人，最喜欢对对子，写春联。",
        options: [
          { id: "B", text: "会写字吗？" },
          { id: "D", text: "别装了。" },
          { id: "A", text: "哎呦，肚子里有墨水！" }, // Best
          { id: "C", text: "穷酸样。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "真才实学！",
          "B": "书法大家！",
          "C": "文人风骨，怎么叫穷酸？"
        }
      },
      {
        dougen: "春联讲究平仄对仗，天对地，雨对风。",
        options: [
          { id: "C", text: "我不懂。" },
          { id: "A", text: "大陆对长空。" }, // Best
          { id: "B", text: "大蒜对大葱。" },
          { id: "D", text: "废话连篇。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "这是文化！",
          "B": "那是厨房！",
          "C": "简单的很，学着点。"
        }
      },
      {
        dougen: "咱们来试一个？我说上联，您对下联。",
        options: [
          { id: "B", text: "我不会。" },
          { id: "A", text: "行啊，您出题！" }, // Best
          { id: "D", text: "你也配？" },
          { id: "C", text: "太难了。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "你也配听！",
          "B": "我教您！",
          "C": "试试嘛，很容易。"
        }
      },
      {
        dougen: "上联是：风吹水面层层浪。",
        options: [
          { id: "A", text: "雨打沙滩点点坑。" }, // Best
          { id: "B", text: "大雨哗啦啦下。" },
          { id: "C", text: "水里有鱼。" },
          { id: "D", text: "淹死你。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "真狠呐！",
          "B": "这不是对联，是造句。",
          "C": "也不对仗。"
        }
      },
      {
        dougen: "好！再来一个难的：独角兽。",
        options: [
          { id: "D", text: "独眼龙。" },
          { id: "B", text: "三角龙。" },
          { id: "A", text: "比目鱼！" }, // Best
          { id: "C", text: "怪兽。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "独眼龙不好听！",
          "B": "三角龙是恐龙！",
          "C": "怪兽不对仗。"
        }
      },
      {
        dougen: "不错不错。再来：孙行者。",
        options: [
          { id: "B", text: "猪八戒。" },
          { id: "A", text: "祖冲之！" }, // Best
          { id: "C", text: "沙悟净。" },
          { id: "D", text: "弼马温。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "官职不行！",
          "B": "那是《西游记》里的人物，不对仗。",
          "C": "师弟不行，得对名字。"
        }
      },
      {
        dougen: "为什么对祖冲之呢？",
        options: [
          { id: "C", text: "好听。" },
          { id: "B", text: "瞎蒙的。" },
          { id: "A", text: "祖对孙，冲对行，之对者，严丝合缝！" }, // Best
          { id: "D", text: "不知道。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "多学着点！",
          "B": "有理有据，不是瞎蒙。",
          "C": "凑巧了。"
        }
      },
      {
        dougen: "再来个现代的：上海自来水来自海上。",
        options: [
          { id: "A", text: "山东落花生花落东山。" }, // Best
          { id: "B", text: "北京烤鸭真好吃。" },
          { id: "D", text: "绕口令啊？" },
          { id: "C", text: "水费很贵。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "不是绕口令，是回文联！",
          "B": "吃货！",
          "C": "跑题了！"
        }
      },
      {
        dougen: "这是回文联，正读反读都一样。",
        options: [
          { id: "B", text: "哦。" },
          { id: "A", text: "有学问！" }, // Best
          { id: "C", text: "麻烦。" },
          { id: "D", text: "无聊。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "高雅！",
          "B": "懂了吧？",
          "C": "不麻烦，有趣！"
        }
      },
      {
        dougen: "那我出个绝的：袁世凯千古。",
        options: [
          { id: "B", text: "万岁万岁。" },
          { id: "D", text: "大坏蛋。" },
          { id: "A", text: "这...中华民国万岁？不对，这是挽联啊！" }, // Best
          { id: "C", text: "死得好。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "客观评价！",
          "B": "不敢瞎喊！",
          "C": "别激动。"
        }
      },
      {
        dougen: "下联是：中国人民万岁！",
        options: [
          { id: "A", text: "这对不上啊！" }, // Best
          { id: "C", text: "没毛病。" },
          { id: "B", text: "对得好。" },
          { id: "D", text: "乱七八糟。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "乱哪了？",
          "B": "对不上，字数都不对！",
          "C": "哪没毛病？"
        }
      },
      {
        dougen: "袁世凯对不起中国人民啊！",
        options: [
          { id: "B", text: "哈哈。" },
          { id: "A", text: "嗨！您这是急转弯啊！" }, // Best
          { id: "D", text: "下去吧！" },
          { id: "C", text: "有道理。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "不下！",
          "B": "别笑！",
          "C": "是吧？"
        }
      },
      // --- Encore: Riddles/Descriptions ---
      {
        dougen: "对联不过瘾，咱们来猜个灯谜。",
        options: [
          { id: "A", text: "好啊，动动脑子。" }, // Best
          { id: "C", text: "我笨。" },
          { id: "B", text: "猜什么？" },
          { id: "D", text: "没意思。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "有意思！",
          "B": "猜谜！",
          "C": "不笨，试试。"
        }
      },
      {
        dougen: "谜面是：远看像朵花，近看全是疤。",
        options: [
          { id: "B", text: "哈密瓜？" },
          { id: "A", text: "这是什么东西？" }, // Best
          { id: "C", text: "烂苹果。" },
          { id: "D", text: "蛤蟆。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "您才蛤蟆！",
          "B": "不是瓜。",
          "C": "不是水果。"
        }
      },
      {
        dougen: "谜底是——我的脸！",
        options: [
          { id: "A", text: "豁！您对自己下手够狠的！" }, // Best
          { id: "C", text: "丑八怪。" },
          { id: "B", text: "确实像。" },
          { id: "D", text: "吓人。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "别怕！",
          "B": "像什么像！",
          "C": "太直白了吧！"
        }
      },
      {
        dougen: "因为我这个人太“花”了！",
        options: [
          { id: "B", text: "花心？" },
          { id: "A", text: "您这是麻子脸吧！" }, // Best
          { id: "C", text: "花钱？" },
          { id: "D", text: "不要脸。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "谁不要脸？",
          "B": "不花心！",
          "C": "不花钱。"
        }
      },
      {
        dougen: "再给您出一个：脑袋像箩筐，腰身像水缸。",
        options: [
          { id: "A", text: "这也太难猜了。" }, // Best
          { id: "B", text: "猪？" },
          { id: "C", text: "怪物。" },
          { id: "D", text: "饭桶。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "您猜对了...一半。",
          "B": "不是猪！",
          "C": "不是怪物。"
        }
      },
      {
        dougen: "这是照镜子时候的我。",
        options: [
          { id: "B", text: "哈哈。" },
          { id: "A", text: "合着您就是个大饭桶啊！" }, // Best
          { id: "C", text: "真胖。" },
          { id: "D", text: "下去吧！" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "不下！还得谢幕呢！",
          "B": "别笑！",
          "C": "富态！"
        }
      }
    ]
  },
  // Script 7: 超级发明家
  {
    topic: "超级发明家 (创意)",
    turns: [
      {
        dougen: "现在的科技发展太快了，我也搞起了发明创造。",
        options: [
          { id: "C", text: "爱迪生？" },
          { id: "B", text: "发明啥了？" },
          { id: "A", text: "哟，您还是个科学家！" }, // Best
          { id: "D", text: "别炸了实验室。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "安全着呢！",
          "C": "比他厉害！",
          "B": "很多！"
        }
      },
      {
        dougen: "我发明了一个“自动洗脸机”。",
        options: [
          { id: "A", text: "那多方便啊，省事儿！" }, // Best
          { id: "D", text: "懒死你。" },
          { id: "B", text: "怎么洗？" },
          { id: "C", text: "我用手洗。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "科技改变生活！",
          "B": "全自动！",
          "C": "手洗太累。"
        }
      },
      {
        dougen: "把脸伸进去，里面有俩刷子，左三圈右三圈。",
        options: [
          { id: "B", text: "疼不疼？" },
          { id: "D", text: "毁容神器。" },
          { id: "A", text: "这不刷鞋的机器吗？" }, // Best
          { id: "C", text: "干净吗？" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "美容！",
          "B": "舒服着呢！",
          "C": "绝对干净，皮都刷掉一层。"
        }
      },
      {
        dougen: "我还发明了“太阳能手电筒”。",
        options: [
          { id: "C", text: "好用吗？" },
          { id: "A", text: "这也环保啊。" }, // Best
          { id: "D", text: "多此一举。" },
          { id: "B", text: "亮吗？" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "不懂科学！",
          "C": "神器！",
          "B": "巨亮！"
        }
      },
      {
        dougen: "只要有太阳，它就亮；没太阳，它绝对不亮！",
        options: [
          { id: "D", text: "智障发明。" },
          { id: "A", text: "废话！有太阳我还要手电筒干嘛？！" }, // Best
          { id: "B", text: "真智能。" },
          { id: "C", text: "省电。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "这就是智慧！",
          "B": "那是！",
          "C": "绝对省电。"
        }
      },
      {
        dougen: "还有一个“防丢鞋”。",
        options: [
          { id: "A", text: "这个好，省得孩子丢鞋。" }, // Best
          { id: "C", text: "我也要。" },
          { id: "B", text: "带GPS？" },
          { id: "D", text: "没用。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "大用处！",
          "C": "回头送您一双。",
          "B": "不用GPS。"
        }
      },
      {
        dougen: "这鞋穿上脱不下来，焊死在脚上的！",
        options: [
          { id: "B", text: "好家伙。" },
          { id: "D", text: "这是刑具吧。" },
          { id: "A", text: "那睡觉怎么办啊！" }, // Best
          { id: "C", text: "臭了吧。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "防止丢失！",
          "B": "结实！",
          "C": "透气好。"
        }
      },
      {
        dougen: "最近我又在研究“隐身衣”。",
        options: [
          { id: "B", text: "看不见？" },
          { id: "A", text: "这可是高科技，哈利波特啊！" }, // Best
          { id: "C", text: "真的假的？" },
          { id: "D", text: "骗子。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "诚信经营！",
          "B": "全透明！",
          "C": "千真万确。"
        }
      },
      {
        dougen: "穿上它，虽然别人能看见你，但你看不见别人！",
        options: [
          { id: "D", text: "滚下去！" },
          { id: "B", text: "掩耳盗铃？" },
          { id: "C", text: "我也会。" },
          { id: "A", text: "那就是把眼睛蒙上了啊！" } // Best
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "不下！",
          "B": "那是原理！",
          "C": "简单吧？"
        }
      },
      // --- Encore: AI Robot ---
      {
        dougen: "其实我最大的成就是发明了人工智能机器人。",
        options: [
          { id: "A", text: "嚯，高科技AI啊！" }, // Best
          { id: "B", text: "像人吗？" },
          { id: "D", text: "人工智障吧。" },
          { id: "C", text: "我不信。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "超级智能！",
          "B": "太像了。",
          "C": "真的！"
        }
      },
      {
        dougen: "长得跟我一模一样，智商也跟我一样。",
        options: [
          { id: "B", text: "那完蛋了。" },
          { id: "A", text: "那这机器人也不太聪明吧？" }, // Best
          { id: "C", text: "双胞胎？" },
          { id: "D", text: "蠢货。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "大智若愚！",
          "B": "没完蛋！",
          "C": "不是双胞胎，是克隆。"
        }
      },
      {
        dougen: "昨天我俩下象棋，它居然作弊！",
        options: [
          { id: "B", text: "赢了吗？" },
          { id: "A", text: "机器人还懂偷棋子儿？" }, // Best
          { id: "C", text: "真坏。" },
          { id: "D", text: "砸了它。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "别砸，贵着呢！",
          "B": "没赢！",
          "C": "程序设定。"
        }
      },
      {
        dougen: "我一生气，给了它一耳光。",
        options: [
          { id: "A", text: "手疼不疼啊？那是铁的！" }, // Best
          { id: "C", text: "暴力狂。" },
          { id: "B", text: "它哭了？" },
          { id: "D", text: "打得好。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "那是教育！",
          "B": "没哭，漏油了。",
          "C": "教育孩子嘛。"
        }
      },
      {
        dougen: "它反手就给我摁地上了，说：由于检测到攻击行为，启动自卫模式。",
        options: [
          { id: "B", text: "高级。" },
          { id: "A", text: "这机器人脾气还挺大！" }, // Best
          { id: "C", text: "报警吧。" },
          { id: "D", text: "活该。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "正当防卫！",
          "B": "高科技！",
          "C": "家务事报什么警。"
        }
      },
      {
        dougen: "主要是它用的是我的脑子，随根儿，记仇！",
        options: [
          { id: "B", text: "哈哈。" },
          { id: "A", text: "合着您这是自己打自己啊！" }, // Best
          { id: "D", text: "下去吧！" },
          { id: "C", text: "真乱。" }
        ],
        bestId: "A",
        worstId: "D",
        reactions: {
          "D": "不下！",
          "B": "幸灾乐祸！",
          "C": "因果循环。"
        }
      }
    ]
  }
];