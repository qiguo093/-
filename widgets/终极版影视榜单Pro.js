WidgetMetadata = {
    id: "super_ultime_media_hub_makka",
    title: "终极版影视榜单Pro",
    description: "动漫、影剧、综艺、流行风向与平台分流一网打尽",
    author: "七果",
    version: "1.3.0", // 🚀 更新：彻底拔除旧废弃源，接入专属独立数据源，动态刮削纯净化
    requiredVersion: "0.0.1",
    site: "https://t.me/MakkaPakkaOvO",
    
    globalParams: [
        {
            name: "traktClientId",
            title: "Trakt Client ID",
            type: "input",
            description: "选填，不填则使用内置。Trakt 榜单专用。",
            value: ""
        }
    ],

    modules: [
{
          id: "hub.1",
            title: "🌸 动漫全境聚合",
            functionName: "routeAnimeOmni",
            cacheDuration: 3600,
            params: [
                {
                    name: "anime_source", title: "选择数据源", type: "enumeration", value: "cal",
                    enumOptions: [
                        { title: "Bangumi 追番日历", value: "cal" },
                        { title: "Bilibili 热度榜单", value: "bili" },
                        { title: "Bangumi 近期热门", value: "hot" },
                        { title: "Bangumi 年季度榜", value: "rank" },
                        { title: "Bangumi 每日放送", value: "daily" },
                        { title: "TMDB 热门/新番", value: "tmdb" },
                        { title: "AniList 流行榜单", value: "anilist" },
                        { title: "MAL 权威榜单", value: "mal" }
                    ]
                },
                { name: "cal_day", title: "选择日期", type: "enumeration", value: "today", belongTo: { paramName: "anime_source", value: ["cal"] }, enumOptions: [ { title: "📅 今日更新", value: "today" }, { title: "周一 (月)", value: "1" }, { title: "周二 (火)", value: "2" }, { title: "周三 (水)", value: "3" }, { title: "周四 (木)", value: "4" }, { title: "周五 (金)", value: "5" }, { title: "周六 (土)", value: "6" }, { title: "周日 (日)", value: "7" } ] },
                { name: "bili_sort", title: "榜单分区", type: "enumeration", value: "1", belongTo: { paramName: "anime_source", value: ["bili"] }, enumOptions: [ { title: "📺 B站番剧 (日漫)", value: "1" }, { title: "🇨🇳 B站国创 (国漫)", value: "4" } ] },
                { name: "hot_cat", title: "分类", type: "enumeration", value: "anime", belongTo: { paramName: "anime_source", value: ["hot"] }, enumOptions: [ { title: "动画", value: "anime" } ] },
                { name: "rank_cat", title: "分类", type: "enumeration", value: "anime", belongTo: { paramName: "anime_source", value: ["rank"] }, enumOptions: [ { title: "动画", value: "anime" }, { title: "三次元", value: "real" } ] },
                { name: "rank_year", title: "年份", type: "enumeration", value: `2026`, belongTo: { paramName: "anime_source", value: ["rank"] }, enumOptions: [{ title: "2026", value: "2026" }, { title: "2025", value: "2025" }, { title: "2024", value: "2024" }, { title: "2023", value: "2023" }, { title: "2022", value: "2022" }, { title: "2021", value: "2021" }, { title: "2020", value: "2020" }, { title: "2019", value: "2019" }, { title: "2018", value: "2018" }, { title: "2017", value: "2017" }, { title: "2016", value: "2016" }, { title: "2015", value: "2015" }, { title: "2014", value: "2014" }, { title: "2013", value: "2013" }, { title: "2012", value: "2012" }, { title: "2011", value: "2011" }, { title: "2010", value: "2010" }, { title: "2009", value: "2009" }, { title: "2008", value: "2008" }, { title: "2007", value: "2007" }, { title: "2006", value: "2006" }, { title: "2005", value: "2005" }, { title: "2004", value: "2004" }, { title: "2003", value: "2003" }, { title: "2002", value: "2002" }, { title: "2001", value: "2001" }, { title: "2000", value: "2000" }, { title: "1999", value: "1999" }, { title: "1998", value: "1998" }, { title: "1997", value: "1997" }, { title: "1996", value: "1996" }, { title: "1995", value: "1995" }, { title: "1994", value: "1994" }, { title: "1993", value: "1993" }, { title: "1992", value: "1992" }, { title: "1991", value: "1991" }, { title: "1990", value: "1990" }, { title: "1989", value: "1989" }, { title: "1988", value: "1988" }, { title: "1987", value: "1987" }, { title: "1986", value: "1986" }, { title: "1985", value: "1985" }, { title: "1984", value: "1984" }, { title: "1983", value: "1983" }, { title: "1982", value: "1982" }, { title: "1981", value: "1981" }, { title: "1980", value: "1980" }, { title: "1979", value: "1979" }, { title: "1978", value: "1978" }, { title: "1977", value: "1977" }, { title: "1976", value: "1976" }, { title: "1975", value: "1975" }, { title: "1974", value: "1974" }, { title: "1973", value: "1973" }, { title: "1972", value: "1972" }, { title: "1971", value: "1971" }, { title: "1970", value: "1970" }, { title: "1969", value: "1969" }, { title: "1968", value: "1968" }, { title: "1967", value: "1967" }, { title: "1966", value: "1966" }, { title: "1965", value: "1965" }, { title: "1964", value: "1964" }, { title: "1963", value: "1963" }, { title: "1962", value: "1962" }, { title: "1961", value: "1961" }, { title: "1960", value: "1960" }, { title: "1959", value: "1959" }, { title: "1958", value: "1958" }, { title: "1957", value: "1957" }, { title: "1956", value: "1956" }, { title: "1955", value: "1955" }, { title: "1954", value: "1954" }, { title: "1953", value: "1953" }, { title: "1952", value: "1952" }, { title: "1951", value: "1951" }, { title: "1950", value: "1950" }, { title: "1949", value: "1949" }, { title: "1948", value: "1948" }, { title: "1947", value: "1947" }, { title: "1946", value: "1946" }, { title: "1945", value: "1945" }, { title: "1944", value: "1944" }, { title: "1943", value: "1943" }, { title: "1942", value: "1942" }, { title: "1941", value: "1941" }, { title: "1940", value: "1940" }] },
                { name: "rank_month", title: "月份/季度", type: "enumeration", value: "all", belongTo: { paramName: "anime_source", value: ["rank"] }, enumOptions: [ { title: "全年", value: "all" }, { title: "冬季 (1月)", value: "1" }, { title: "春季 (4月)", value: "4" }, { title: "夏季 (7月)", value: "7" }, { title: "秋季 (10月)", value: "10" } ] },
                { name: "rank_sort", title: "排序方式", type: "enumeration", value: "collects", belongTo: { paramName: "anime_source", value: ["rank"] }, enumOptions: [ { title: "排名", value: "rank" }, { title: "热度", value: "trends" }, { title: "收藏数", value: "collects" }, { title: "发售日期", value: "date" }, { title: "名称", value: "title" } ] },
                { name: "daily_filter", title: "筛选范围", type: "enumeration", value: "today", belongTo: { paramName: "anime_source", value: ["daily"] }, enumOptions: [ { title: "今日放送", value: "today" }, { title: "指定单日", value: "specific_day" }, { title: "本周一至四", value: "mon_thu" }, { title: "本周五至日", value: "fri_sun" }, { title: "整周放送", value: "all_week" } ] },
                { name: "daily_weekday", title: "指定单日星期", type: "enumeration", value: "1", belongTo: { paramName: "anime_source", value: ["daily"] }, enumOptions: [ { title: "星期一", value: "1" }, { title: "星期二", value: "2" }, { title: "星期三", value: "3" }, { title: "星期四", value: "4" }, { title: "星期五", value: "5" }, { title: "星期六", value: "6" }, { title: "星期日", value: "7" } ] },
                { name: "daily_sort", title: "排序方式", type: "enumeration", value: "popularity_rat_bgm", belongTo: { paramName: "anime_source", value: ["daily"] }, enumOptions: [ { title: "热度(评分人数)", value: "popularity_rat_bgm" }, { title: "评分", value: "score_bgm_desc" }, { title: "放送日(更新日期)", value: "airdate_desc" }, { title: "默认", value: "default" } ] },
                { name: "tmdb_sort", title: "榜单类型", type: "enumeration", value: "trending", belongTo: { paramName: "anime_source", value: ["tmdb"] }, enumOptions: [ { title: "🔥 实时流行 (Trending)", value: "trending" }, { title: "📅 最新首播 (New)", value: "new" }, { title: "👑 高分神作 (Top Rated)", value: "top" } ] },
                { name: "anilist_sort", title: "排序方式", type: "enumeration", value: "TRENDING_DESC", belongTo: { paramName: "anime_source", value: ["anilist"] }, enumOptions: [ { title: "📈 近期趋势 (Trending)", value: "TRENDING_DESC" }, { title: "💖 历史人气 (Popularity)", value: "POPULARITY_DESC" }, { title: "⭐ 评分最高 (Score)", value: "SCORE_DESC" } ] },
                { name: "mal_sort", title: "榜单类型", type: "enumeration", value: "airing", belongTo: { paramName: "anime_source", value: ["mal"] }, enumOptions: [ { title: "🔥 当前热播 Top", value: "airing" }, { title: "🏆 历史总榜 Top", value: "all" }, { title: "🎥 最佳剧场版", value: "movie" }, { title: "🔜 即将上映", value: "upcoming" } ] },
                { name: "page", title: "页码", type: "page" }
            ]
        },

{
          id: "hub.2",
            title: "🏷️ 全球影剧类别",
            functionName: "loadGenreRank",
            cacheDuration: 3600,
            params: [
                { name: "sort_by", title: "影视类型", type: "enumeration", value: "all", enumOptions: [ { title: "🌟 全部 (影+剧混合)", value: "all" }, { title: "🎬 电影 (Movie)", value: "movie" }, { title: "📺 电视剧 (TV)", value: "tv" } ] },
                { name: "genre", title: "题材流派", type: "enumeration", value: "all", enumOptions: [ { title: "🌟 全部题材 (All)", value: "all" }, { title: "🛸 科幻 (Sci-Fi)", value: "scifi" }, { title: "🔍 悬疑 (Mystery)", value: "mystery" }, { title: "👻 恐怖 (Horror)", value: "horror" }, { title: "🔪 犯罪 (Crime)", value: "crime" }, { title: "💥 动作 (Action)", value: "action" }, { title: "😂 喜剧 (Comedy)", value: "comedy" }, { title: "❤️ 爱情 (Romance)", value: "romance" }, { title: "🎭 剧情 (Drama)", value: "drama" }, { title: "🐉 奇幻 (Fantasy)", value: "fantasy" }, { title: "🎨 动画 (Animation)", value: "animation" }, { title: "🎥 纪录片 (Documentary)", value: "documentary" } ] },
                { name: "region", title: "国家/地区", type: "enumeration", value: "all", enumOptions: [ { title: "🌍 全球 (所有国家)", value: "all" }, { title: "🇨🇳 中国大陆", value: "cn" }, { title: "🇭🇰 中国香港", value: "hk" }, { title: "🇹🇼 中国台湾", value: "tw" }, { title: "🏮 港台 (香港+台湾)", value: "hktw" }, { title: "🇯🇵 日本", value: "jp" }, { title: "🇰🇷 韩国", value: "kr" }, { title: "🌸 日韩合集", value: "jpkr" }, { title: "🇹🇭 泰国", value: "th" }, { title: "🇸🇬 新加坡", value: "sg" }, { title: "🇲🇾 马来西亚", value: "my" }, { title: "🇮🇳 印度", value: "in" }, { title: "🌏 亚太大区", value: "apac" }, { title: "🇺🇸 美国", value: "us" }, { title: "🇬🇧 英国", value: "gb" }, { title: "🇩🇪 德国", value: "de" }, { title: "🇸🇪 瑞典", value: "se" }, { title: "🇪🇺 欧洲全境", value: "europe" }, { title: "🇪🇸 西班牙", value: "es" }, { title: "🇲🇽 墨西哥", value: "mx" }, { title: "💃 西语/拉丁美洲", value: "latin" } ] },
                { name: "order_rule", title: "排序规则", type: "enumeration", value: "popularity", enumOptions: [ { title: "🔥 热门趋势", value: "popularity" }, { title: "⭐ 评分最高", value: "rating" }, { title: "📅 最新上线", value: "time" } ] },
                { name: "page", title: "页码", type: "page", startPage: 1 }
            ]
        },

{
          id: "hub.3",
            title: "🎬 全能电影榜单",
            functionName: "routeMovieOmni",
            cacheDuration: 3600,
            params: [
                {
                    name: "movie_source", title: "榜单模式", type: "enumeration", value: "general",
                    enumOptions: [
                        { title: "🔥 电影综合榜", value: "general" },
                        { title: "🏆 年度最佳电影", value: "yearly" },
                        { title: "🏷️ 按类型探索", value: "genre" }
                    ]
                },
                { name: "general_sort", title: "榜单分类", type: "enumeration", value: "popular", belongTo: { paramName: "movie_source", value: ["general"] }, enumOptions: [ { title: "🔥 流行趋势 (Popular)", value: "popular" }, { title: "⭐️ 历史高分 (Top Rated)", value: "top_rated" }, { title: "💰 全球票房榜 (Box Office)", value: "box_office" }, { title: "🏆 奥斯卡佳片 (Oscar)", value: "oscar" } ] },
                { name: "yearly_sort", title: "选择年份", type: "enumeration", value: "2024", belongTo: { paramName: "movie_source", value: ["yearly"] }, enumOptions: [ { title: "2025年 最佳", value: "2025" }, { title: "2024年 最佳", value: "2024" }, { title: "2023年 最佳", value: "2023" }, { title: "2022年 最佳", value: "2022" }, { title: "2021年 最佳", value: "2021" }, { title: "2020年 最佳", value: "2020" }, { title: "2019年 最佳", value: "2019" }, { title: "2018年 最佳", value: "2018" }, { title: "2017年 最佳", value: "2017" }, { title: "2016年 最佳", value: "2016" }, { title: "2015年 最佳", value: "2015" } ] },
                { name: "genre_sort", title: "选择类型", type: "enumeration", value: "878", belongTo: { paramName: "movie_source", value: ["genre"] }, enumOptions: [ { title: "🛸 科幻 (Sci-Fi)", value: "878" }, { title: "🎭 剧情 (Drama)", value: "18" }, { title: "🤯 悬疑 (Mystery)", value: "9648" }, { title: "💥 动作 (Action)", value: "28" }, { title: "😂 喜剧 (Comedy)", value: "35" }, { title: "❤️ 爱情 (Romance)", value: "10749" }, { title: "👻 恐怖 (Horror)", value: "27" }, { title: "🔪 犯罪 (Crime)", value: "80" }, { title: "🧙‍♂️ 奇幻 (Fantasy)", value: "14" }, { title: "🦄 动画 (Animation)", value: "16" } ] },
                { name: "page", title: "页码", type: "page", startPage: 1 }
            ]
        },

{
          id: "hub.4",
            title: "📺 全球综艺频道",
            functionName: "loadVarietyShows",
            cacheDuration: 3600,
            params: [
                {
                    name: "sort_by", title: "国家/地区", type: "enumeration", value: "cn",
                    enumOptions: [
                        { title: "🇨🇳 中国大陆", value: "cn" },
                        { title: "🇰🇷 韩国", value: "kr" },
                        { title: "🇯🇵 日本", value: "jp" },
                        { title: "🇹🇼 中国台湾", value: "tw" },
                        { title: "🇭🇰 中国香港", value: "hk" },
                        { title: "🇺🇸 欧美综合", value: "eu_us" },
                        { title: "🌍 全球综合", value: "all" }
                    ]
                },
                {
                    name: "list_type", title: "排播与榜单", type: "enumeration", value: "hot",
                    enumOptions: [
                        { title: "🔥 近期热播 (Hot)", value: "hot" },
                        { title: "📅 今日更新 (Today)", value: "today" },
                        { title: "🔜 明日预告 (Tomorrow)", value: "tomorrow" },
                        { title: "📈 流行趋势 (5年内热榜)", value: "trend" },
                        { title: "⭐ 高分神级 (Top Rated)", value: "top" }
                    ]
                },
                { name: "page", title: "页码", type: "page", startPage: 1 }
            ]
        },

{
          id: "hub.5",
            title: "🧭 影剧流行风向",
            functionName: "routeTrendsHub",
            cacheDuration: 3600,
            params: [
                {
                    name: "hub_source", 
                    title: "选择平台",
                    type: "enumeration",
                    value: "imdb",
                    enumOptions: [
                        { title: "🟡 IMDb 权威榜单", value: "imdb" },
                        { title: "🍅 烂番茄风向标", value: "rt" },
                        { title: "🌍 Trakt 趋势榜", value: "trakt" },
                        { title: "🟢 豆瓣 国内风向", value: "douban" }
                    ]
                },
                {
                    name: "imdb_sort", title: "IMDb 榜单", type: "enumeration", value: "trending_week",
                    belongTo: { paramName: "hub_source", value: ["imdb"] },
                    enumOptions: [
                        { title: "📅 本周热榜 (Trending Week)", value: "trending_week" }, { title: "🔥 今日热榜 (Trending Day)", value: "trending_day" }, { title: "🌊 流行趋势 (Popular)", value: "popular" }, { title: "💎 高分神作 (Top Rated)", value: "top_rated" }, { title: "🇨🇳 国产剧热度(模拟)", value: "china_tv" }, { title: "🇨🇳 国产电影热度(模拟)", value: "china_movie" }
                    ]
                },
                {
                    name: "mediaType", title: "范围 (仅全球榜有效)", type: "enumeration", value: "all",
                    belongTo: { paramName: "imdb_sort", value: ["trending_week", "trending_day", "popular", "top_rated"] },
                    enumOptions: [ { title: "全部 (剧集+电影)", value: "all" }, { title: "电影", value: "movie" }, { title: "剧集", value: "tv" } ]
                },
                {
                    name: "rt_sort", title: "烂番茄 榜单", type: "enumeration", value: "rt_movies_home",
                    belongTo: { paramName: "hub_source", value: ["rt"] },
                    enumOptions: [
                        { title: "🎬 流媒体热映", value: "rt_movies_home" }, { title: "🍿 院线热映", value: "rt_movies_theater" }, { title: "💎 最佳流媒体", value: "rt_movies_best" }, { title: "📺 热门剧集", value: "rt_tv_popular" }, { title: "🆕 最新上线", value: "rt_tv_new" }
                    ]
                },
                {
                    name: "trakt_sort", title: "Trakt 榜单", type: "enumeration", value: "trending",
                    belongTo: { paramName: "hub_source", value: ["trakt"] },
                    enumOptions: [
                        { title: "🔥 实时热播 (Trending)", value: "trending" }, { title: "🌊 最受欢迎 (Popular)", value: "popular" }, { title: "❤️ 最受期待 (Anticipated)", value: "anticipated" }
                    ]
                },
                {
                    name: "traktType", title: "Trakt 类型", type: "enumeration", value: "all",
                    belongTo: { paramName: "hub_source", value: ["trakt"] },
                    enumOptions: [ { title: "全部 (剧集+电影)", value: "all" }, { title: "剧集", value: "shows" }, { title: "电影", value: "movies" } ]
                },
                {
                    name: "db_sort", title: "豆瓣 榜单", type: "enumeration", value: "db_tv_cn",
                    belongTo: { paramName: "hub_source", value: ["douban"] },
                    enumOptions: [
                        { title: "🇨🇳 热门国产剧", value: "db_tv_cn" }, { title: "🎤 热门综艺", value: "db_variety" }, { title: "🎬 热门电影", value: "db_movie" }, { title: "🇺🇸 热门美剧", value: "db_tv_us" }
                    ]
                },
                { name: "page", title: "页码", type: "page", startPage: 1 }
            ]
        },

{
          id: "hub.6",
            title: "🔀 平台分流片库",
            functionName: "loadPlatformMatrix",
            cacheDuration: 3600,
            params: [
                {
                    name: "sort_by", title: "内容分类", type: "enumeration", value: "tv_drama",
                    enumOptions: [ 
                        { title: "📺 电视剧", value: "tv_drama" }, 
                        { title: "🎤 综艺", value: "tv_variety" }, 
                        { title: "🐲 动漫", value: "tv_anime" }, 
                        { title: "🎬 电影", value: "movie" } 
                    ]
                },
                {
                    name: "platform", title: "播出平台", type: "enumeration", value: "2007",
                    enumOptions: [
                        { title: "腾讯视频", value: "2007" }, { title: "爱奇艺", value: "1330" }, { title: "优酷", value: "1419" }, { title: "芒果TV", value: "1631" }, { title: "Bilibili", value: "1605" }, { title: "Netflix", value: "213" }, { title: "Disney+", value: "2739" }, { title: "HBO", value: "49" }, { title: "Apple TV+", value: "2552" }
                    ]
                },
                {
                    name: "sort", title: "排序", type: "enumeration", value: "popularity.desc",
                    enumOptions: [ { title: "🔥 热度最高", value: "popularity.desc" }, { title: "📅 最新首播", value: "first_air_date.desc" }, { title: "⭐ 评分最高", value: "vote_average.desc" } ]
                },
                { name: "page", title: "页码", type: "page", startPage: 1 }
            ]
        },

{
          id: "hub.7",
            title: "🥇 流媒体TOP10",
            functionName: "loadOfficialTop10",
            cacheDuration: 3600,
            params: [
                {
                    name: "sort_by", title: "榜单地区", type: "enumeration", value: "united-states",
                    enumOptions: [
                        { title: "🇺🇸 美国", value: "united-states" }, { title: "🇰🇷 韩国", value: "south-korea" }, { title: "🇹🇼 台湾", value: "taiwan" }, { title: "🇭🇰 香港", value: "hong-kong" }, { title: "🇯🇵 日本", value: "japan" }, { title: "🇬🇧 英国", value: "united-kingdom" }, { title: "🌍 全球", value: "world" }
                    ]
                },
                {
                    name: "platform", title: "流媒体平台", type: "enumeration", value: "netflix",
                    enumOptions: [
                        { title: "Netflix", value: "netflix" }, { title: "HBO", value: "hbo" }, { title: "Disney+", value: "disney" }, { title: "Apple TV+", value: "apple-tv" }, { title: "Amazon Prime", value: "amazon-prime" }
                    ]
                },
                {
                    name: "mediaType", title: "榜单类型", type: "enumeration", value: "tv",
                    enumOptions: [ { title: "📺 剧集 (TV Shows)", value: "tv" }, { title: "🎬 电影 (Movies)", value: "movie" } ]
                },
                { name: "page", title: "页码", type: "page", startPage: 1 }
            ]
        },

{
          id: "charts.hub",
          title: "🎞️ 影视榜单",
          description: "TMDB 榜单、豆瓣片单与屏蔽管理",
          functionName: "routeChartsHub",
          cacheDuration: 3600,
          params: [
            { name: "chart_source", title: "榜单分类", type: "enumeration", value: "hot_tv", enumOptions: [
              { title: "TMDB 热门剧集", value: "hot_tv" },
              { title: "TMDB 热门电影", value: "hot_movie" },
              { title: "TMDB 高分内容", value: "top_rated" },
              { title: "TMDB 播出平台", value: "network" },
              { title: "TMDB 出品公司", value: "company" },
              { title: "TMDB 搜索屏蔽", value: "block" },
              { title: "TMDB 屏蔽管理", value: "manage" },
              { title: "豆瓣自定义片单", value: "douban" }
            ] },
            { name: "chart_language", title: "语言", type: "language", value: "zh-CN", belongTo: { paramName: "chart_source", value: ["hot_tv", "hot_movie", "top_rated", "network", "company", "block"] } },
            { name: "chart_region", title: "地区", type: "enumeration", value: "", belongTo: { paramName: "chart_source", value: ["hot_tv", "hot_movie"] }, enumOptions: [{ title: "全部地区", value: "" }, { title: "中国", value: "CN" }, { title: "美国", value: "US" }, { title: "韩国", value: "KR" }, { title: "日本", value: "JP" }, { title: "英国", value: "GB" }, { title: "泰国", value: "TH" }] },
            { name: "chart_media_type", title: "内容类型", type: "enumeration", value: "movie", belongTo: { paramName: "chart_source", value: ["top_rated"] }, enumOptions: [{ title: "电影", value: "movie" }, { title: "剧集", value: "tv" }] },
            { name: "chart_network", title: "播出平台", type: "enumeration", value: "", belongTo: { paramName: "chart_source", value: ["network"] }, enumOptions: [{ title: "全部", value: "" }, { title: "Tencent", value: "2007" }, { title: "iQiyi", value: "1330" }, { title: "Youku", value: "1419" }, { title: "Bilibili", value: "1605" }, { title: "Netflix", value: "213" }, { title: "Disney+", value: "2739" }, { title: "HBO", value: "49" }, { title: "Apple TV+", value: "2552" }] },
            { name: "chart_company", title: "出品公司", type: "enumeration", value: "", belongTo: { paramName: "chart_source", value: ["company"] }, enumOptions: [{ title: "全部", value: "" }, { title: "Disney", value: "2" }, { title: "Warner Bros", value: "174" }, { title: "Sony", value: "34" }, { title: "Universal", value: "33" }, { title: "Paramount", value: "4" }, { title: "Marvel", value: "420" }, { title: "A24", value: "41077" }] },
            { name: "chart_genre", title: "内容类型 ID", type: "input", value: "", belongTo: { paramName: "chart_source", value: ["network", "company"] }, placeholders: [{ title: "全部", value: "" }, { title: "动画", value: "16" }, { title: "剧情", value: "18" }, { title: "喜剧", value: "35" }, { title: "犯罪", value: "80" }, { title: "真人秀", value: "10764" }] },
            { name: "chart_air_status", title: "上映状态", type: "enumeration", value: "released", belongTo: { paramName: "chart_source", value: ["network", "company"] }, enumOptions: [{ title: "已上映", value: "released" }, { title: "未上映", value: "upcoming" }, { title: "全部", value: "" }] },
            { name: "chart_sort", title: "排序方式", type: "enumeration", value: "popularity.desc", belongTo: { paramName: "chart_source", value: ["network", "company"] }, enumOptions: [{ title: "人气最高", value: "popularity.desc" }, { title: "上映时间↓", value: "first_air_date.desc" }, { title: "评分最高", value: "vote_average.desc" }, { title: "最多投票", value: "vote_count.desc" }] },
            { name: "chart_block_type", title: "屏蔽类型", type: "enumeration", value: "by_name", belongTo: { paramName: "chart_source", value: ["block"] }, enumOptions: [{ title: "按影片名称", value: "by_name" }, { title: "按内容类型", value: "by_genre" }, { title: "手动输入 ID", value: "manual_id" }] },
            { name: "chart_block_action", title: "操作模式", type: "enumeration", value: "search_only", belongTo: { paramName: "chart_source", value: ["block"] }, enumOptions: [{ title: "仅搜索", value: "search_only" }, { title: "搜索并屏蔽", value: "search_and_block" }] },
            { name: "chart_query", title: "影片名称", type: "input", value: "", belongTo: { paramName: "chart_source", value: ["block"] } },
            { name: "chart_tmdb_id", title: "TMDB ID", type: "input", value: "", belongTo: { paramName: "chart_source", value: ["block"] } },
            { name: "chart_manage_type", title: "管理类型", type: "enumeration", value: "items", belongTo: { paramName: "chart_source", value: ["manage"] }, enumOptions: [{ title: "屏蔽的内容", value: "items" }, { title: "屏蔽的类型", value: "genres" }] },
            { name: "chart_manage_action", title: "操作", type: "enumeration", value: "view", belongTo: { paramName: "chart_source", value: ["manage"] }, enumOptions: [{ title: "查看列表", value: "view" }, { title: "清空列表", value: "clear" }, { title: "取消屏蔽", value: "unblock" }, { title: "导出配置", value: "export" }, { title: "导入配置", value: "import" }] },
            { name: "chart_unblock_id", title: "取消屏蔽 ID", type: "input", value: "", belongTo: { paramName: "chart_source", value: ["manage"] } },
            { name: "chart_import_data", title: "导入数据", type: "input", value: "", belongTo: { paramName: "chart_source", value: ["manage"] } },
            { name: "chart_url", title: "豆瓣片单地址", type: "input", value: "", belongTo: { paramName: "chart_source", value: ["douban"] }, placeholders: [{ title: "豆瓣电影实时热榜", value: "https://www.douban.com/doubanapp/dispatch?uri=/subject_collection/movie_real_time_hotest/&dt_dapp=1" }] },
            { name: "page", title: "页码", type: "page" }
          ]
        }
]
};

// =========================================================================
// 1. 全局配置与纯净内存缓存 (必须置于顶部)
// =========================================================================

const currentYear = new Date().getFullYear();
const startYear = Math.max(currentYear + 1, 2026); 
const yearOptions = [];
for (let year = startYear; year >= 1940; year--) { 
    yearOptions.push({ title: `${year}`, value: `${year}` });
}

// 🚀 全新的纯净内存缓存（仅用于动态网页刮削，彻底废弃旧版 JSON 请求）
const ScrapingCache = {
    airtime: {},
    daily: []
};

const DEFAULT_TRAKT_ID = "95b59922670c84040db3632c7aac6f33704f6ffe5cbf3113a056e37cb45cb482";

const GLOBAL_GENRE_MAP_ALL = {
    16: "动画", 10759: "动作冒险", 35: "喜剧", 18: "剧情", 14: "奇幻", 878: "科幻", 9648: "悬疑", 
    10749: "爱情", 27: "恐怖", 10765: "科幻奇幻", 80: "犯罪", 99: "纪录片", 10751: "家庭", 
    36: "历史", 10402: "音乐", 10770: "电视电影", 53: "惊悚", 10752: "战争", 37: "西部", 28: "动作", 12: "冒险",
    10762: "儿童", 10763: "新闻", 10764: "真人秀", 10766: "肥皂剧", 10767: "脱口秀", 10768: "战综"
};

function getGlobalGenreText(ids) {
    if (!ids || !Array.isArray(ids)) return "影视";
    const genres = ids.map(id => GLOBAL_GENRE_MAP_ALL[id]).filter(Boolean);
    return genres.length > 0 ? genres.slice(0, 2).join(" / ") : "影视";
}

// 统一 UI 卡片构建工厂
function buildItem({ id, tmdbId, type, title, date, poster, backdrop, rating, genreText, subTitle, desc }) {
    const baseInfo = [date, subTitle].filter(Boolean).join(" · ");
    const overview = desc ? `\n${desc}` : "\n暂无简介";

    return {
        id: String(id),
        tmdbId: parseInt(tmdbId) || parseInt(id),
        type: "tmdb",
        mediaType: type,
        title: title,
        genreTitle: genreText || (type === "tv" ? "剧集" : "电影"), 
        description: baseInfo ? (baseInfo + overview) : (desc || "暂无简介"),
        releaseDate: date,
        posterPath: poster ? `https://image.tmdb.org/t/p/w500${poster}` : "",
        backdropPath: backdrop ? `https://image.tmdb.org/t/p/w780${backdrop}` : "",
        subTitle: subTitle
    };
}

// =========================================================================
// 2. 终极聚合版 Widget Metadata (史诗七大阵营)
// =========================================================================

;

// =========================================================================
// 3. 路由与各分类底层
// =========================================================================

async function routeChartsHub(params = {}) {
  const p = params;
  const common = { language: p.chart_language || "zh-CN", page: p.page || 1 };
  switch (p.chart_source || "hot_tv") {
    case "hot_tv": return loadTodayHotTV({ ...common, sort_by: p.chart_region || "" });
    case "hot_movie": return loadTodayHotMovies({ ...common, sort_by: p.chart_region || "" });
    case "top_rated": return tmdbTopRated({ ...common, type: p.chart_media_type || "movie" });
    case "network": return tmdbDiscoverByNetwork({ ...common, with_networks: p.chart_network || "", with_genres: p.chart_genre || "", air_status: p.chart_air_status || "released", sort_by: p.chart_sort || "popularity.desc" });
    case "company": return tmdbCompanies({ ...common, with_companies: p.chart_company || "", with_genres: p.chart_genre || "", air_status: p.chart_air_status || "released", sort_by: p.chart_sort || "popularity.desc" });
    case "block": return searchAndBlock({ block_type: p.chart_block_type || "by_name", action: p.chart_block_action || "search_only", query: p.chart_query || "", genre_name: p.chart_query || "", tmdb_id: p.chart_tmdb_id || "", media_type: p.chart_media_type || "tv", language: p.chart_language || "zh-CN" });
    case "manage": return manageBlockedItems({ manage_type: p.chart_manage_type || "items", action: p.chart_manage_action || "view", unblock_id: p.chart_unblock_id || "", unblock_media_type: p.chart_media_type || "tv", import_data: p.chart_import_data || "" });
    case "douban": return loadEnhancedDoubanList({ url: p.chart_url || "", page: p.page || 1 });
    default: return [];
  }
}

async function routeAnimeOmni(params) {
    const source = params.anime_source || "cal";
    let subParams = { page: params.page || 1 };

    if (source === "cal") { subParams.sort_by = params.cal_day || "today"; return await loadBangumiCalendar(subParams); }
    if (source === "bili") { subParams.sort_by = params.bili_sort || "1"; return await loadBilibiliRank(subParams); }
    if (source === "hot") { subParams.category = params.hot_cat || "anime"; return await fetchRecentHot(subParams); }
    if (source === "rank") {
        subParams.category = params.rank_cat || "anime"; subParams.year = params.rank_year || "2026";
        subParams.month = params.rank_month || "all"; subParams.sort = params.rank_sort || "collects";
        return await fetchAirtimeRanking(subParams);
    }
    if (source === "daily") {
        subParams.filterType = params.daily_filter || "today"; subParams.specificWeekday = params.daily_weekday || "1";
        subParams.dailySortOrder = params.daily_sort || "popularity_rat_bgm"; return await fetchDailyCalendarApi(subParams);
    }
    if (source === "tmdb") { subParams.sort_by = params.tmdb_sort || "trending"; return await loadTmdbAnimeRanking(subParams); }
    if (source === "anilist") { subParams.sort_by = params.anilist_sort || "TRENDING_DESC"; return await loadAniListRanking(subParams); }
    if (source === "mal") { subParams.sort_by = params.mal_sort || "airing"; return await loadMalRanking(subParams); }
    return [];
}

async function routeMovieOmni(params) {
    const source = params.movie_source || "general";
    let subParams = { page: params.page || 1 };

    if (source === "general") { subParams.sort_by = params.general_sort || "popular"; return await loadGeneralMovies(subParams); }
    if (source === "yearly") { subParams.sort_by = params.yearly_sort || "2024"; return await loadYearlyBestMovies(subParams); }
    if (source === "genre") { subParams.sort_by = params.genre_sort || "878"; return await loadGenreMovies(subParams); }
    return [];
}

async function routeTrendsHub(params) {
    const hubSource = params.hub_source || "imdb";
    const page = params.page || 1;

    if (hubSource === "rt") {
        const rtSort = params.rt_sort || "rt_movies_home";
        return await loadRottenTomatoesTrends(rtSort, page);
    }
    if (hubSource === "imdb") {
        const imdbSort = params.imdb_sort || "trending_week";
        const mediaType = params.mediaType || "all";
        return await loadImdbList(imdbSort, mediaType, page);
    }
    if (hubSource === "trakt") {
        const traktSort = params.trakt_sort || "trending";
        const traktType = params.traktType || "all";
        const traktClientId = params.traktClientId || DEFAULT_TRAKT_ID;
        return await handleTraktList(traktSort, traktType, traktClientId, page);
    }
    if (hubSource === "douban") {
        const dbSort = params.db_sort || "db_tv_cn";
        let tag = "热门", type = "tv";
        if (dbSort === "db_tv_cn") { tag = "国产剧"; type = "tv"; }
        else if (dbSort === "db_variety") { tag = "综艺"; type = "tv"; }
        else if (dbSort === "db_movie") { tag = "热门"; type = "movie"; }
        else if (dbSort === "db_tv_us") { tag = "美剧"; type = "tv"; }
        return await fetchDoubanAndMap(tag, type, page);
    }
    return [];
}

const MOVIE_GENRE_MAP = {
    16: "动画", 10759: "动作冒险", 35: "喜剧", 18: "剧情", 14: "奇幻", 878: "科幻", 9648: "悬疑", 
    10749: "爱情", 27: "恐怖", 10765: "科幻奇幻", 80: "犯罪", 99: "纪录片", 10751: "家庭", 
    36: "历史", 10402: "音乐", 10770: "电视电影", 53: "惊悚", 10752: "战争", 37: "西部", 28: "动作", 12: "冒险"
};
function movie_getGenreText(ids) {
    if (!ids || !Array.isArray(ids)) return "电影";
    const genres = ids.map(id => MOVIE_GENRE_MAP[id]).filter(Boolean);
    return genres.length > 0 ? genres.slice(0, 2).join(" / ") : "电影";
}
function movie_buildItem(item) {
    if (!item) return null;
    const releaseDate = item.release_date || "";
    return {
        id: String(item.id), tmdbId: parseInt(item.id), type: "tmdb", mediaType: "movie",
        title: item.title, releaseDate: releaseDate, genreTitle: movie_getGenreText(item.genre_ids),    
        subTitle: `${releaseDate.substring(0,4)}`,            
        posterPath: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "", 
        backdropPath: item.backdrop_path ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}` : "", 
        description: `电影\n${item.overview || "暂无简介"}`
    };
}

async function loadGeneralMovies(params) {
    const sortBy = params.sort_by || "popular";
    let endpoint = "/movie/popular";
    let queryParams = { language: "zh-CN", page: params.page || 1 };
    
    if (sortBy === "top_rated") endpoint = "/movie/top_rated";
    else if (sortBy === "box_office") { endpoint = "/discover/movie"; queryParams.sort_by = "revenue.desc"; }
    else if (sortBy === "oscar") { 
        endpoint = "/discover/movie"; 
        queryParams.with_keywords = "818"; 
        queryParams.sort_by = "vote_average.desc"; 
        queryParams["vote_count.gte"] = 1000; 
    }
    try { const res = await Widget.tmdb.get(endpoint, { params: queryParams }); return (res.results || []).map(i => movie_buildItem(i)).filter(Boolean); } catch (e) { return []; }
}
async function loadYearlyBestMovies(params) {
    try {
        let queryParams = { language: "zh-CN", page: params.page || 1, primary_release_year: params.sort_by || "2024", sort_by: "vote_average.desc", "vote_count.gte": 500 };
        const res = await Widget.tmdb.get("/discover/movie", { params: queryParams }); return (res.results || []).map(i => movie_buildItem(i)).filter(Boolean);
    } catch (e) { return []; }
}
async function loadGenreMovies(params) {
    try {
        let queryParams = { language: "zh-CN", page: params.page || 1, with_genres: params.sort_by || "878", sort_by: "popularity.desc" };
        const res = await Widget.tmdb.get("/discover/movie", { params: queryParams }); return (res.results || []).map(i => movie_buildItem(i)).filter(Boolean);
    } catch (e) { return []; }
}

const ADVANCED_GENRE_MAP = {
    "all": { movie: "", tv: "" }, "scifi": { movie: "878", tv: "10765" }, "mystery": { movie: "9648", tv: "9648" }, "horror": { movie: "27", tv: "27" }, "crime": { movie: "80", tv: "80" },
    "action": { movie: "28", tv: "10759" }, "comedy": { movie: "35", tv: "35" }, "romance": { movie: "10749", tv: "10749" }, "drama": { movie: "18", tv: "18" }, "fantasy": { movie: "14", tv: "10765" }, "animation": { movie: "16", tv: "16" }, "documentary": { movie: "99", tv: "99" }
};
const REGION_MAP = { "all": "", "cn": "CN", "hk": "HK", "tw": "TW", "hktw": "HK|TW", "jp": "JP", "kr": "KR", "jpkr": "JP|KR", "th": "TH", "sg": "SG", "my": "MY", "in": "IN", "apac": "CN|HK|TW|JP|KR|TH|SG|MY|IN", "us": "US", "gb": "GB", "de": "DE", "se": "SE", "europe": "GB|DE|FR|IT|ES|SE|NO|DK|FI|NL|BE|CH|AT|IE", "es": "ES", "mx": "MX", "latin": "ES|MX|AR|CO|CL|PE|VE" };

async function fetchGenreRankData(mediaType, genre, region, sort_rule, page) {
    const genreId = ADVANCED_GENRE_MAP[genre] ? ADVANCED_GENRE_MAP[genre][mediaType] : "";
    const originCountry = REGION_MAP[region] || "";
    let tmdbSortBy = sort_rule === "rating" ? "vote_average.desc" : (sort_rule === "time" ? (mediaType === "movie" ? "primary_release_date.desc" : "first_air_date.desc") : "popularity.desc");
    const queryParams = { language: "zh-CN", page: page, sort_by: tmdbSortBy, include_adult: false, include_video: false };
    if (genreId) queryParams.with_genres = genreId;
    if (originCountry) queryParams.with_origin_country = originCountry;
    queryParams["vote_count.gte"] = sort_rule === "rating" ? 200 : 10;
    if (sort_rule === "time") {
        const today = new Date(); today.setMonth(today.getMonth() + 1); const maxDate = today.toISOString().split('T')[0];
        if (mediaType === "movie") queryParams["primary_release_date.lte"] = maxDate; else queryParams["first_air_date.lte"] = maxDate;
    }
    try {
        const res = await Widget.tmdb.get(`/discover/${mediaType}`, { params: queryParams });
        return (res.results || []).map(item => {
            const date = item.release_date || item.first_air_date || ""; 
            return {
                id: String(item.id), tmdbId: parseInt(item.id), type: "tmdb", mediaType: mediaType, title: item.title || item.name,
                genreTitle: getGlobalGenreText(item.genre_ids),
                releaseDate: date,
                subTitle: `${date ? date.substring(0, 4) : "未知"}`, 
                description: `${date}\n${item.overview || "暂无简介"}`,
                posterPath: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "", 
                backdropPath: item.backdrop_path ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}` : "", 
                _popularity: item.popularity || 0,
                _date: date || "1970-01-01"
            };
        });
    } catch (e) { return []; }
}

async function loadGenreRank(params = {}) {
    const page = parseInt(params.page) || 1;
    const mediaType = params.sort_by || "all"; 
    const genre = params.genre || "all"; 
    const region = params.region || "all"; 
    const sort_rule = params.order_rule || "popularity";

    if (mediaType === "all") {
        const [movies, tvs] = await Promise.all([
            fetchGenreRankData("movie", genre, region, sort_rule, page),
            fetchGenreRankData("tv", genre, region, sort_rule, page)
        ]);
        let items = [...movies, ...tvs];
        items.sort((a, b) => { 
            if (sort_rule === "popularity") return b._popularity - a._popularity; 
            else if (sort_rule === "time") return new Date(b._date) - new Date(a._date); 
            else return b.rating - a.rating; 
        });
        items = items.slice(0, 20); 
        if (items.length === 0) return page === 1 ? [{ id: "empty", type: "text", title: "未找到符合条件" }] : [];
        return items;
    } else {
        const items = await fetchGenreRankData(mediaType, genre, region, sort_rule, page);
        if (items.length === 0) return page === 1 ? [{ id: "empty", type: "text", title: "未找到符合条件" }] : [];
        return items;
    }
}

async function loadVarietyShows(params = {}) {
    const page = parseInt(params.page) || 1;
    const region = params.sort_by || "cn";
    const list_type = params.list_type || "hot";

    const varietyGenres = "10764|10767";

    const varietyRegionMap = {
        "all": "", "cn": "CN", "kr": "KR", "jp": "JP",
        "tw": "TW", "hk": "HK", "eu_us": "US|GB|DE|FR|IT|ES|CA|AU"
    };
    const originCountry = varietyRegionMap[region] || "";

    let queryParams = { language: "zh-CN", page: page, with_genres: varietyGenres, include_adult: false };
    if (originCountry) queryParams.with_origin_country = originCountry;

    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    let tmrw = new Date(now); tmrw.setDate(tmrw.getDate() + 1);
    const tomorrowStr = tmrw.toISOString().split('T')[0];
    let fiveYearsAgo = new Date(now); fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5);
    const fiveYearsAgoStr = fiveYearsAgo.toISOString().split('T')[0];

    if (list_type === "today") {
        queryParams.sort_by = "popularity.desc"; queryParams["air_date.gte"] = todayStr; queryParams["air_date.lte"] = todayStr;
    } else if (list_type === "tomorrow") {
        queryParams.sort_by = "popularity.desc"; queryParams["air_date.gte"] = tomorrowStr; queryParams["air_date.lte"] = tomorrowStr;
    } else if (list_type === "hot") {
        queryParams.sort_by = "popularity.desc";
    } else if (list_type === "trend") {
        queryParams.sort_by = "popularity.desc"; queryParams["first_air_date.gte"] = fiveYearsAgoStr; 
    } else if (list_type === "top") {
        queryParams.sort_by = "vote_average.desc"; queryParams["vote_count.gte"] = 15; 
    }

    try {
        const res = await Widget.tmdb.get("/discover/tv", { params: queryParams });
        const items = res.results || [];
        if (items.length === 0) return page === 1 ? [{ id: "empty", type: "text", title: "暂无综艺数据" }] : [];
        return items.map(item => {
            const date = item.release_date || item.first_air_date || ""; 
            let genreLabel = getGlobalGenreText(item.genre_ids);
            if (genreLabel === "影视") genreLabel = "综艺";
            return {
                id: String(item.id), tmdbId: parseInt(item.id), type: "tmdb", mediaType: "tv", title: item.title || item.name,
                genreTitle: genreLabel, releaseDate: date, 
                subTitle: `${date ? date.substring(0, 4) : "未知"}`, 
                description: `${date}\n${item.overview || "暂无简介"}`,
                posterPath: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "", 
                backdropPath: item.backdrop_path ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}` : ""
            };
        });
    } catch (e) { return [{ id: "err", type: "text", title: "加载失败" }]; }
}

const RT_URLS = {
    "rt_movies_theater": "https://www.rottentomatoes.com/browse/movies_in_theaters/sort:popular?minTomato=75",
    "rt_movies_home": "https://www.rottentomatoes.com/browse/movies_at_home/sort:popular?minTomato=75",
    "rt_movies_best": "https://www.rottentomatoes.com/browse/movies_at_home/sort:critic_highest?minTomato=90",
    "rt_tv_popular": "https://www.rottentomatoes.com/browse/tv_series_browse/sort:popular?minTomato=75",
    "rt_tv_new": "https://www.rottentomatoes.com/browse/tv_series_browse/sort:newest?minTomato=75"
};

async function loadRottenTomatoesTrends(listType, page) {
    const pageSize = 15;
    const allItems = await fetchRottenTomatoesList(listType);
    if (allItems.length === 0) return page === 1 ? [{ id: "empty", type: "text", title: "无数据" }] : [];
    const start = (page - 1) * pageSize;
    const pageItems = allItems.slice(start, start + pageSize);
    const promises = pageItems.map((item, i) => searchRtTmdb(item, start + i + 1));
    return (await Promise.all(promises)).filter(Boolean);
}

async function fetchRottenTomatoesList(type) {
    const url = RT_URLS[type] || RT_URLS["rt_movies_home"];
    try {
        const res = await Widget.http.get(url, { headers: { "User-Agent": "Mozilla/5.0" } });
        const $ = Widget.html.load(res.data || "");
        const items = [];
        $('[data-qa="discovery-media-list-item"]').each((i, el) => {
            const $el = $(el);
            const title = $el.find('[data-qa="discovery-media-list-item-title"]').text().trim();
            if (!title) return;
            const scoreEl = $el.find('score-pairs');
            items.push({ title: title, tomatoScore: scoreEl.attr('critics-score') || "", popcornScore: scoreEl.attr('audiencescore') || "", mediaType: type.includes("tv") ? "tv" : "movie" });
        });
        return items;
    } catch (e) { return []; }
}

async function searchRtTmdb(rtItem, rank) {
    const cleanTitle = rtItem.title.replace(/\s\(\d{4}\)$/, "");
    try {
        const res = await Widget.tmdb.get(`/search/${rtItem.mediaType}`, { params: { query: cleanTitle, language: "zh-CN" } });
        const match = (res.results || [])[0];
        if (!match) return null;
        let scores = [];
        if (rtItem.tomatoScore) scores.push(`🍅 ${rtItem.tomatoScore}%`);
        if (rtItem.popcornScore) scores.push(`🍿 ${rtItem.popcornScore}%`);
        const customSub = scores.join("  ") || "烂番茄认证";
        const dateStr = match.first_air_date || match.release_date || "";
        
        return {
            id: String(match.id), tmdbId: match.id, type: "tmdb", mediaType: rtItem.mediaType, title: `${rank}. ${match.name || match.title}`, 
            genreTitle: getGlobalGenreText(match.genre_ids) || (rtItem.mediaType === "movie" ? "电影" : "剧集"),
            description: `${dateStr}\n原名: ${rtItem.title}`, releaseDate: dateStr, subTitle: customSub, 
            posterPath: match.poster_path ? `https://image.tmdb.org/t/p/w500${match.poster_path}` : "", 
            backdropPath: match.backdrop_path ? `https://image.tmdb.org/t/p/w780${match.backdrop_path}` : ""
        };
    } catch (e) { return null; }
}

function buildImdbItem(item, forceType) {
    if (!item) return null;
    const type = forceType || item.media_type || (item.title ? "movie" : "tv");
    const fullDate = item.release_date || item.first_air_date || ""; 
    return {
        id: String(item.id), tmdbId: parseInt(item.id), type: "tmdb", mediaType: type, title: item.title || item.name,
        subTitle: fullDate || "", 
        description: fullDate ? `${fullDate}\n${item.overview || "暂无简介"}` : (item.overview || "暂无简介"),
        releaseDate: fullDate, 
        posterPath: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "", 
        backdropPath: item.backdrop_path ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}` : "",
        year: fullDate.substring(0, 4), 
        genreTitle: getGlobalGenreText(item.genre_ids) || (type === "tv" ? "剧集" : "电影")
    };
}

async function loadImdbList(category, mediaType, page) {
    try {
        let items = [];
        if (category.startsWith("china_")) {
            const isTv = category === "china_tv";
            const endpoint = isTv ? "tv" : "movie";
            const res = await Widget.tmdb.get(`/discover/${endpoint}`, { params: { language: "zh-CN", page: page, sort_by: "popularity.desc", with_original_language: "zh", "vote_count.gte": 2 } });
            items = (res.results || []).map(i => buildImdbItem(i, endpoint));
            return items;
        }
        if (category.startsWith("trending_")) {
            const timeWindow = category === "trending_day" ? "day" : "week";
            const res = await Widget.tmdb.get(`/trending/${mediaType}/${timeWindow}`, { params: { language: "zh-CN", page: page } });
            items = (res.results || []).map(i => buildImdbItem(i));
        } else {
            if (mediaType === "all") {
                const [resM, resT] = await Promise.all([ Widget.tmdb.get(`/movie/${category}`, { params: { language: "zh-CN", page: page } }), Widget.tmdb.get(`/tv/${category}`, { params: { language: "zh-CN", page: page } }) ]);
                const movies = (resM.results || []).map(i => buildImdbItem(i, "movie"));
                const tvs = (resT.results || []).map(i => buildImdbItem(i, "tv"));
                items = [...movies, ...tvs].sort((a, b) => { if (category === "top_rated") return b._rating - a._rating; return 0; }).slice(0, 20);
            } else {
                const res = await Widget.tmdb.get(`/${mediaType}/${category}`, { params: { language: "zh-CN", page: page } });
                items = (res.results || []).map(i => buildImdbItem(i, mediaType));
            }
        }
        return items;
    } catch (e) { return [{ id: "err", type: "text", title: "加载异常" }]; }
}

async function fetchTraktData(type, list, id, page) {
    try {
        const res = await Widget.http.get(`https://api.trakt.tv/${type}/${list}?limit=15&page=${page}`, { headers: { "Content-Type": "application/json", "trakt-api-version": "2", "trakt-api-key": id } });
        return res.data || [];
    } catch (e) { return []; }
}

async function handleTraktList(listType, traktType, traktClientId, page) {
    let rawData = [];
    if (traktType === "all") {
        const [movies, shows] = await Promise.all([ fetchTraktData("movies", listType, traktClientId, page), fetchTraktData("shows", listType, traktClientId, page) ]);
        rawData = [...movies, ...shows].sort((a, b) => (b.watchers || b.list_count || 0) - (a.watchers || a.list_count || 0));
    } else {
        rawData = await fetchTraktData(traktType, listType, traktClientId, page);
    }
    if (!rawData || rawData.length === 0) return page === 1 ? [] : []; 
    const promises = rawData.slice(0, 20).map(async (item, index) => {
        let subject = item.show || item.movie || item;
        const mediaType = item.show ? "tv" : "movie";
        let stats = listType === "trending" ? `🔥 ${item.watchers || 0} 人在看` : (listType === "anticipated" ? `❤️ ${item.list_count || 0} 人想看` : `No. ${(page - 1) * 15 + index + 1}`); 
        if (traktType === "all") stats = `[${mediaType === "tv" ? "剧" : "影"}] ${stats}`;
        if (!subject || !subject.ids || !subject.ids.tmdb) return null;
        try {
            const d = await Widget.tmdb.get(`/${mediaType}/${subject.ids.tmdb}`, { params: { language: "zh-CN" } });
            return {
                id: String(d.id), tmdbId: d.id, type: "tmdb", mediaType: mediaType, title: d.name || d.title || subject.title,
                genreTitle: getGlobalGenreText(d.genres?.map(g => g.id)), releaseDate: d.first_air_date || d.release_date || "",
                subTitle: stats, 
                description: `${d.first_air_date || d.release_date || ""}\n${d.overview || "暂无简介"}`,
                posterPath: d.poster_path ? `https://image.tmdb.org/t/p/w500${d.poster_path}` : "", 
                backdropPath: d.backdrop_path ? `https://image.tmdb.org/t/p/w780${d.backdrop_path}` : ""
            };
        } catch (e) { return null; }
    });
    return (await Promise.all(promises)).filter(Boolean);
}

function mergeDoubanTmdb(target, source) {
    target.id = String(source.id); target.tmdbId = source.id;
    target.posterPath = source.poster_path ? `https://image.tmdb.org/t/p/w500${source.poster_path}` : target.posterPath;
    target.backdropPath = source.backdrop_path ? `https://image.tmdb.org/t/p/w780${source.backdrop_path}` : "";
    const date = source.first_air_date || source.release_date || ""; target.genreTitle = getGlobalGenreText(source.genre_ids) || (target.mediaType === "tv" ? "剧集" : "电影"); target.releaseDate = date;
    target.description = (date ? `${date} · ${target.subTitle}` : target.subTitle) + (source.overview ? `\n${source.overview}` : "\n暂无简介"); target.rating = source.vote_average ? parseFloat(source.vote_average) : 0;
}

async function searchTmdbForDouban(query, type) {
    const q = query.replace(/第[一二三四五六七八九十\d]+[季章]/g, "").trim();
    try {
        const res = await Widget.tmdb.get(`/search/${type}`, { params: { query: encodeURIComponent(q), language: "zh-CN" } });
        return (res.results || [])[0];
    } catch (e) { return null; }
}

async function fetchDoubanAndMap(tag, type, page) {
    const start = (page - 1) * 20;
    try {
        const randomBid = Math.random().toString(36).substring(2, 13);
        const res = await Widget.http.get(`https://movie.douban.com/j/search_subjects?type=${type}&tag=${encodeURIComponent(tag)}&sort=recommend&page_limit=20&page_start=${start}`, {
            headers: { 
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X)",
                "Referer": "https://movie.douban.com/explore",
                "Host": "movie.douban.com",
                "X-Requested-With": "XMLHttpRequest", 
                "Cookie": `bid=${randomBid};`
            }
        });

        const data = (typeof res.data === 'string') ? JSON.parse(res.data) : (res.data || {});
        const list = data.subjects || [];
        if (list.length === 0) return page === 1 ? [{ id: "empty", type: "text", title: "暂无数据" }] : [];
        
        const promises = list.map(async item => {
            let finalItem = { 
                id: `db_${item.id}`, type: "tmdb", mediaType: type, 
                title: item.title, subTitle: `豆瓣 ${item.rate}`, 
                description: `豆瓣 ${item.rate}\n暂无简介`, 
                genreTitle: type === "tv" ? "剧集" : "电影",
                posterPath: item.cover 
            };
            const tmdb = await searchTmdbForDouban(item.title, type);
            if (tmdb) mergeDoubanTmdb(finalItem, tmdb); 
            return finalItem;
        });
        return await Promise.all(promises);
    } catch (e) { 
        return [{ id: "err", type: "text", title: "豆瓣拒绝了请求", description: "网络IP被豆瓣限制，请切换流量(4G/5G)或更换节点。" }]; 
    }
}

async function loadPlatformMatrix(params = {}) {
    const category = params.sort_by || "tv_drama";
    const platformId = params.platform || "2007";
    const sort = params.sort || "popularity.desc";
    const page = params.page || 1;

    const foreignPlatforms = ["213", "2739", "49", "2552"];
    if (category === "movie" && !foreignPlatforms.includes(platformId)) return page === 1 ? [{ id: "empty", type: "text", title: "暂不支持国内平台电影", description: "请切换为剧集或国外平台" }] : [];

    const queryParams = { language: "zh-CN", sort_by: sort, page: page, include_adult: false, include_null_first_air_dates: false };
    if (category.startsWith("tv_")) {
        queryParams.with_networks = platformId;
        if (category === "tv_anime") queryParams.with_genres = "16";
        else if (category === "tv_variety") queryParams.with_genres = "10764|10767";
        else if (category === "tv_drama") queryParams.without_genres = "16,10764,10767";
        return await loadPlatformMatrixData("tv", queryParams);
    } else if (category === "movie") {
        const usMap = { "213":"8", "2739":"337", "49":"1899|15", "2552":"350" };
        queryParams.watch_region = "US"; queryParams.with_watch_providers = usMap[platformId];
        return await loadPlatformMatrixData("movie", queryParams);
    }
}

async function loadPlatformMatrixData(mediaType, params) {
    try {
        const res = await Widget.tmdb.get(`/discover/${mediaType}`, { params });
        if (!res.results || res.results.length === 0) return params.page === 1 ? [{ id: "empty", type: "text", title: "暂无流媒体数据" }] : [];
        return res.results.map(item => {
            const date = item.first_air_date || item.release_date || "";
            return {
                id: String(item.id), tmdbId: item.id, type: "tmdb", mediaType: mediaType, title: item.name || item.title, date: date, releaseDate: date,
                posterPath: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "", 
                backdropPath: item.backdrop_path ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}` : "", 
                genreTitle: getGlobalGenreText(item.genre_ids),
                description: `${date}\n${item.overview || "暂无简介"}`
            };
        });
    } catch (e) { return [{ id: "err", type: "text", title: "流媒体拉取失败" }]; }
}

async function loadOfficialTop10(params = {}) {
    const region = params.sort_by || "united-states"; 
    const platform = params.platform || "netflix";
    const mediaType = params.mediaType || "tv";

    let titles = await fetchFlixPatrolData(platform, region, mediaType);

    if (titles.length === 0) {
        return await fetchTmdbFallback_Top10(platform, region, mediaType);
    }

    const searchPromises = titles.slice(0, 10).map((title, index) => 
        searchTmdbForTop10(title, mediaType, index + 1)
    );

    const results = await Promise.all(searchPromises);
    const finalItems = results.filter(r => r !== null);

    if (finalItems.length === 0) {
        return [{ id: "error", title: "匹配失败", description: "获取了榜单但TMDB无数据", type: "text" }];
    }
    return finalItems;
}

async function fetchFlixPatrolData(platform, region, mediaType) {
    const url = region === "world" ? `https://flixpatrol.com/top10/${platform}/` : `https://flixpatrol.com/top10/${platform}/${region}/`;
    try {
        const res = await Widget.http.get(url, { headers: { "User-Agent": "Mozilla/5.0" } });
        const html = typeof res === 'string' ? res : (res.data || "");
        if (!html) return [];
        const $ = Widget.html.load(html);
        const tables = $('.card-table tbody');
        
        let targetTable = null;
        if (tables.length >= 2) targetTable = mediaType === "movie" ? tables.eq(0) : tables.eq(1);
        else if (tables.length === 1) targetTable = tables.eq(0);
        else return [];

        const titles = [];
        targetTable.find('tr').each((i, el) => {
            if (i >= 10) return; 
            const textLink = $(el).find('a.hover\\:underline').text().trim();
            const textTd = $(el).find('td').eq(2).text().trim();
            const finalTitle = textLink || textTd;
            if (finalTitle && finalTitle.length > 1) titles.push(finalTitle.split('(')[0].trim());
        });
        return titles;
    } catch (e) { return []; }
}

async function searchTmdbForTop10(queryTitle, mediaType, rank) {
    try {
        const data = await Widget.tmdb.get(`/search/${mediaType}`, { params: { query: queryTitle.trim(), language: "zh-CN", page: 1 } });
        if (data && data.results && data.results.length > 0) {
            let item = data.results[0];
            const date = item.first_air_date || item.release_date || ""; 
            
            return {
                id: String(item.id), tmdbId: parseInt(item.id), type: "tmdb", mediaType: mediaType, title: item.name || item.title,
                releaseDate: date, year: date.substring(0, 4), genreTitle: getGlobalGenreText(item.genre_ids),
                subTitle: `TOP ${rank}`, posterPath: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "",
                backdropPath: item.backdrop_path ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}` : "",
                description: `TOP ${rank}\n${item.overview || "暂无简介"}`
            };
        }
    } catch (e) {} return null;
}

async function fetchTmdbFallback_Top10(platform, region, mediaType) {
    const providerMap = { "netflix": "8", "disney": "337", "hbo": "1899|118", "apple-tv": "350", "amazon-prime": "119" };
    const regionMap = { "united-states": "US", "south-korea": "KR", "taiwan": "TW", "hong-kong": "HK", "japan": "JP", "united-kingdom": "GB", "world": "US" };
    try {
        const data = await Widget.tmdb.get(`/discover/${mediaType}`, { params: { watch_region: regionMap[region] || "US", with_watch_providers: providerMap[platform] || "8", sort_by: "popularity.desc", page: 1, language: "zh-CN" } });
        return (data.results || []).slice(0, 10).map((item, index) => {
            const date = item.first_air_date || item.release_date || ""; 
            return {
                id: String(item.id), tmdbId: parseInt(item.id), type: "tmdb", mediaType: mediaType, title: item.name || item.title,
                releaseDate: date, year: date.substring(0, 4), genreTitle: getGlobalGenreText(item.genre_ids), subTitle: `TOP ${index + 1}`,
                posterPath: item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : "", backdropPath: item.backdrop_path ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}` : "",
                description: `TOP ${index + 1}\n${item.overview || "暂无简介"}`
            };
        });
    } catch (e) { return []; }
}

const GENRE_MAP = {
    16: "动画", 10759: "动作冒险", 35: "喜剧", 18: "剧情", 14: "奇幻", 
    878: "科幻", 9648: "悬疑", 10749: "爱情", 27: "恐怖", 10765: "科幻奇幻"
};

function getGenreText(ids) {
    if (!ids || !Array.isArray(ids)) return "动画";
    const genres = ids.filter(id => id !== 16).map(id => GENRE_MAP[id]).filter(Boolean);
    return genres.length > 0 ? genres.slice(0, 2).join(" / ") : "动画";
}

function parseDate(dateStr) {
    if (!dateStr || typeof dateStr !== 'string') return '';
    let match = dateStr.match(/^(\d{4})年(\d{1,2})月(\d{1,2})日/);
    if (match) return `${match[1]}-${String(match[2]).padStart(2, '0')}-${String(match[3]).padStart(2, '0')}`;
    match = dateStr.match(/^(\d{4})年(\d{1,2})月/);
    if (match) return `${match[1]}-${String(match[2]).padStart(2, '0')}-01`;
    match = dateStr.match(/^(\d{4})$/);
    if (match) return `${match[1]}-01-01`;
    return dateStr;
}

async function searchTmdbAnimeStrict(title1, title2, year) {
    async function doSearch(query) {
        if (!query || typeof query !== 'string') return null;
        const cleanQuery = query.replace(/第[一二三四五六七八九十\d]+[季章]/g, "").replace(/Season \d+/i, "").trim();
        
        try {
            let params = { query: cleanQuery, language: "zh-CN", include_adult: false };
            if (year) params.first_air_date_year = year;
            
            let res = await Widget.tmdb.get("/search/tv", { params });
            let candidates = res.results || [];
            
            if (candidates.length === 0 && year) {
                delete params.first_air_date_year;
                res = await Widget.tmdb.get("/search/tv", { params });
                candidates = res.results || [];
            }
            
            let animeTvs = candidates.filter(r => r.genre_ids?.includes(16));
            if (animeTvs.length > 0) return animeTvs.find(r => r.poster_path) || animeTvs[0];

            let mParams = { query: cleanQuery, language: "zh-CN", include_adult: false };
            if (year) mParams.primary_release_year = year;
            res = await Widget.tmdb.get("/search/movie", { params: mParams });
            candidates = res.results || [];

            if (candidates.length === 0 && year) {
                delete mParams.primary_release_year;
                res = await Widget.tmdb.get("/search/movie", { params: mParams });
                candidates = res.results || [];
            }
            
            let animeMovies = candidates.filter(r => r.genre_ids?.includes(16));
            if (animeMovies.length > 0) return animeMovies.find(r => r.poster_path) || animeMovies[0];

        } catch (e) {}
        return null;
    }

    let match = await doSearch(title1);
    if (!match && title2 && title1 !== title2) {
        match = await doSearch(title2);
    }
    return match;
}

async function sanitizeAndEnsureTmdb(items) {
    if (!items || !Array.isArray(items)) return [];
    const promises = items.map(async (item) => {
        const title = item.name_cn || item.title || item.name;
        const subTitle = item.title !== title ? item.title : null; 
        const rawDate = item.releaseDate || item.description || item.air_date || item.info || "";
        const yearMatch = rawDate.match(/(\d{4})/);
        const year = yearMatch ? yearMatch[1] : null;

        const tmdbMatch = await searchTmdbAnimeStrict(title, subTitle, year);
        
        if (tmdbMatch) {
            return {
                id: String(tmdbMatch.id),
                tmdbId: parseInt(tmdbMatch.id),
                type: "tmdb",
                mediaType: tmdbMatch.title ? "movie" : "tv",
                title: tmdbMatch.name || tmdbMatch.title || title,
                genreTitle: getGenreText(tmdbMatch.genre_ids),
                description: tmdbMatch.first_air_date || tmdbMatch.release_date || parseDate(rawDate) || "即将播出",
                releaseDate: tmdbMatch.first_air_date || tmdbMatch.release_date || parseDate(rawDate),
                posterPath: tmdbMatch.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbMatch.poster_path}` : "",
                backdropPath: tmdbMatch.backdrop_path ? `https://image.tmdb.org/t/p/w780${tmdbMatch.backdrop_path}` : "",
                rating: tmdbMatch.vote_average ? tmdbMatch.vote_average.toFixed(1) : (item.rating || "0.0")
            };
        }
        return null; 
    });
    
    const results = await Promise.all(promises);
    return results.filter(Boolean);
}

async function loadBangumiCalendar(params = {}) {
    const { sort_by = "today", page = 1 } = params;
    let targetDayId = parseInt(sort_by);
    if (sort_by === "today") {
        const jsDay = new Date().getDay();
        targetDayId = jsDay === 0 ? 7 : jsDay;
    }
    
    try {
        const res = await Widget.http.get("https://api.bgm.tv/calendar");
        const dayData = (res.data || []).find(d => d.weekday && d.weekday.id === targetDayId);
        if (!dayData) return [];
        
        const pageSize = 20;
        const pageItems = dayData.items.slice((page - 1) * pageSize, page * pageSize);

        const promises = pageItems.map(async (item) => {
            const cleanTitle = (item.name_cn || item.name).replace(/第[一二三四五六七八九十\d]+[季章]/g, "").trim();
            const year = item.air_date ? item.air_date.substring(0, 4) : null;
            const tmdbItem = await searchTmdbAnimeStrict(cleanTitle, item.name, year);
            if (!tmdbItem) return null;

            return buildItem({
                id: tmdbItem.id,
                tmdbId: tmdbItem.id,
                type: "tv",
                title: tmdbItem.name || tmdbItem.title || item.name_cn || item.name,
                date: tmdbItem.first_air_date || item.air_date,
                poster: tmdbItem.poster_path,
                backdrop: tmdbItem.backdrop_path,
                rating: tmdbItem.vote_average || item.rating?.score,
                genreText: getGenreText(tmdbItem.genre_ids),
                desc: tmdbItem.overview || item.summary || "暂无简介"
            });
        });
        
        const results = await Promise.all(promises);
        return results.filter(Boolean);
    } catch (e) { return []; }
}

// =========================================================================
// 🚀🚀🚀 全新：接入专属 JSON 抓取源 (Bangumi 近期热门)
// =========================================================================
async function fetchRecentHot(params = {}) {
    const url = "https://raw.githubusercontent.com/MakkaPakka518/List/refs/heads/main/data/bangumi-hot.json";
    
    try {
        const res = await Widget.http.get(url);
        const data = res.data || {};
        const hotList = data.hot_anime || [];

        if (hotList.length === 0) {
            return [{ id: "empty", type: "text", title: "暂无数据", description: "获取到的热门列表为空" }];
        }

        // 分页支持
        const page = parseInt(params.page || "1", 10);
        const pageSize = 20;
        const start = (page - 1) * pageSize;
        const pageItems = hotList.slice(start, start + pageSize);

        return pageItems.map((item, index) => {
            // 智能过滤简介：去除原数据自带的第一行（年份·评分·国家），防止和原生排版重复
            const descLines = (item.description || "").split('\n');
            const pureDesc = descLines.length > 1 ? descLines.slice(1).join('\n') : item.description;

            return buildItem({
                id: item.id,
                tmdbId: item.tmdbId,
                type: item.mediaType || "tv",
                title: item.title,
                date: item.releaseDate || "",
                poster: item.posterPath,
                backdrop: item.backdropPath,
                genreText: item.genreTitle,
                subTitle: `🔥 热度 TOP ${start + index + 1}`,
                desc: pureDesc || "暂无简介"
            });
        });
        
    } catch (error) {
        return [{ id: "error", type: "text", title: "网络异常", description: "获取热门列表失败" }];
    }
}

// =========================================================================
// 🌐 纯净刮削引擎 (彻底抛弃老旧 GitHub 数据请求)
// =========================================================================
async function fetchAirtimeRanking(params = {}) {
    const category = params.category || "anime";
    const year = params.year || `${new Date().getFullYear()}`;
    const month = params.month || "all";
    const sort = params.sort || "collects";
    const page = parseInt(params.page || "1", 10);

    const cacheKey = `airtime-${category}-${year}-${month}-${sort}-${page}`;
    if (ScrapingCache.airtime[cacheKey]) {
        return await sanitizeAndEnsureTmdb(ScrapingCache.airtime[cacheKey]);
    }
    
    let url = `https://bgm.tv/${category}/browser/airtime/${year}/${month}?sort=${sort}&page=${page}`;
    const results = await DynamicDataProcessor.processBangumiPage(url, category);
    ScrapingCache.airtime[cacheKey] = results;
    return await sanitizeAndEnsureTmdb(results);
}

async function fetchDailyCalendarApi(params = {}) {
    if (!ScrapingCache.daily || ScrapingCache.daily.length === 0) {
        ScrapingCache.daily = await DynamicDataProcessor.processDailyCalendar();
    }
    let items = ScrapingCache.daily || [];
    
    const { filterType = "today", specificWeekday = "1", dailySortOrder = "popularity_rat_bgm" } = params;
    const JS_DAY_TO_BGM_API_ID = { 0: 7, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 };
    
    let filteredByDay = [];
    if (filterType === "all_week") {
        filteredByDay = items;
    } else {
        const today = new Date();
        const currentJsDay = today.getDay();
        const targetBgmIds = new Set();
        switch (filterType) {
            case "today": targetBgmIds.add(JS_DAY_TO_BGM_API_ID[currentJsDay]); break;
            case "specific_day": targetBgmIds.add(parseInt(specificWeekday, 10)); break;
            case "mon_thu": [1, 2, 3, 4].forEach(id => targetBgmIds.add(id)); break;
            case "fri_sun": [5, 6, 7].forEach(id => targetBgmIds.add(id)); break;
        }
        filteredByDay = items.filter(item => item.bgm_weekday_id && targetBgmIds.has(item.bgm_weekday_id));
    }

    let sortedResults = [...filteredByDay];
    if (dailySortOrder !== "default") {
        sortedResults.sort((a, b) => {
            if (dailySortOrder === "popularity_rat_bgm") return (b.bgm_rating_total || 0) - (a.bgm_rating_total || 0);
            if (dailySortOrder === "score_bgm_desc") return (b.bgm_score || 0) - (a.bgm_score || 0);
            if (dailySortOrder === "airdate_desc") {
                const dateA = a.air_date || 0;
                const dateB = b.air_date || 0;
                return new Date(dateB).getTime() - new Date(dateA).getTime();
            }
            return 0;
        });
    }
    return await sanitizeAndEnsureTmdb(sortedResults);
}

async function loadBilibiliRank(params = {}) {
    const { sort_by = "1", page = 1 } = params; 
    const url = `https://api.bilibili.com/pgc/web/rank/list?day=3&season_type=${sort_by}`; 
    try {
        const res = await Widget.http.get(url, { headers: { "User-Agent": "Mozilla/5.0", "Referer": "https://www.bilibili.com/" } });
        const data = res.data || {};
        const fullList = data.result?.list || data.data?.list || [];
        const pageSize = 20;
        const slicedList = fullList.slice((page - 1) * pageSize, page * pageSize);

        const promises = slicedList.map(async (item) => {
            const cleanTitle = item.title.replace(/第[一二三四五六七八九十\d]+[季章]/g, "").trim();
            const tmdbItem = await searchTmdbAnimeStrict(cleanTitle, item.title, null);
            if (!tmdbItem) return null; 
            return buildItem({
                id: tmdbItem.id, tmdbId: tmdbItem.id, type: "tv", title: tmdbItem.name || tmdbItem.title,
                date: tmdbItem.first_air_date, poster: tmdbItem.poster_path, backdrop: tmdbItem.backdrop_path, rating: tmdbItem.vote_average?.toFixed(1),
                genreText: getGlobalGenreText(tmdbItem.genre_ids), desc: tmdbItem.overview, subTitle: item.new_ep?.index_show || "热播中"
            });
        });
        const results = await Promise.all(promises);
        return results.filter(Boolean); 
    } catch (e) { return []; }
}

async function loadTmdbAnimeRanking(params = {}) {
    const { sort_by = "trending", page = 1 } = params; 
    let queryParams = { language: "zh-CN", page: page, with_genres: "16", with_original_language: "ja" };
    
    if (sort_by === "trending") queryParams.sort_by = "popularity.desc"; 
    else if (sort_by === "new") queryParams.sort_by = "first_air_date.desc"; 
    else if (sort_by === "top") queryParams.sort_by = "vote_average.desc"; 

    try {
        const res = await Widget.tmdb.get("/discover/tv", { params: queryParams });
        return (res.results || []).map(item => buildItem({
            id: item.id, tmdbId: item.id, type: "tv", title: item.name || item.title, date: item.first_air_date, poster: item.poster_path, backdrop: item.backdrop_path, rating: item.vote_average?.toFixed(1), genreText: getGlobalGenreText(item.genre_ids), desc: item.overview
        }));
    } catch (e) { return []; }
}

async function loadAniListRanking(params = {}) {
    const { sort_by = "TRENDING_DESC", page = 1 } = params; 
    const query = `query ($page: Int, $perPage: Int) { Page (page: $page, perPage: $perPage) { media (sort: ${sort_by}, type: ANIME) { title { native romaji english } averageScore seasonYear } } }`; 
    try {
        const res = await Widget.http.post("https://graphql.anilist.co", { query, variables: { page, perPage: 20 } });
        const data = res.data?.data?.Page?.media || [];
        const promises = data.map(async (media) => {
            const tmdbItem = await searchTmdbAnimeStrict(media.title.native || media.title.romaji, media.title.english, media.seasonYear);
            if (!tmdbItem) return null; 
            return buildItem({ id: tmdbItem.id, tmdbId: tmdbItem.id, type: "tv", title: tmdbItem.name || tmdbItem.title, date: tmdbItem.first_air_date, poster: tmdbItem.poster_path, backdrop: tmdbItem.backdrop_path, rating: tmdbItem.vote_average?.toFixed(1), genreText: getGlobalGenreText(tmdbItem.genre_ids), desc: tmdbItem.overview });
        });
        const results = await Promise.all(promises);
        return results.filter(Boolean);
    } catch (e) { return []; }
}

async function loadMalRanking(params = {}) {
    const { sort_by = "airing", page = 1 } = params; 
    let apiParams = { page: page };
    if (sort_by === "airing") apiParams.filter = "airing"; 
    else if (sort_by === "upcoming") apiParams.filter = "upcoming"; 

    try {
        const res = await Widget.http.get("https://api.jikan.moe/v4/top/anime", { params: apiParams });
        const data = res.data?.data || [];
        const promises = data.map(async (item) => {
            const tmdbItem = await searchTmdbAnimeStrict(item.title_japanese || item.title, item.title_english, null);
            if (!tmdbItem) return null; 
            return buildItem({ id: tmdbItem.id, tmdbId: tmdbItem.id, type: "tv", title: tmdbItem.name || tmdbItem.title, date: tmdbItem.first_air_date, poster: tmdbItem.poster_path, backdrop: tmdbItem.backdrop_path, rating: tmdbItem.vote_average?.toFixed(1), genreText: getGlobalGenreText(tmdbItem.genre_ids), desc: tmdbItem.overview });
        });
        const results = await Promise.all(promises);
        return results.filter(Boolean);
    } catch (e) { return []; }
}

const DynamicDataProcessor = (() => {
    function parseBangumiListItems(htmlContent) {
        const $ = Widget.html.load(htmlContent);
        const items = [];
        $('ul#browserItemList li.item').each((_, element) => {
            const $item = $(element);
            const id = $item.attr('id')?.substring(5);
            if (!id) return;
            const title = $item.find('h3 a.l').text().trim();
            const info = $item.find('p.info.tip').text().trim();
            const rating = $item.find('small.fade').text().trim();
            items.push({ id, title, info, rating });
        });
        return items;
    }

    async function processBangumiPage(url, category) {
        try {
            const listHtmlResp = await Widget.http.get(url);
            return parseBangumiListItems(listHtmlResp.data);
        } catch (error) { return []; }
    }

    async function processDailyCalendar() {
        try {
            const apiResponse = await Widget.http.get("https://api.bgm.tv/calendar");
            const allItems = [];
            if (apiResponse && Array.isArray(apiResponse.data)) {
                apiResponse.data.forEach(dayData => {
                    if (dayData && Array.isArray(dayData.items)) {
                        dayData.items.forEach(item => {
                            item.bgm_weekday_id = dayData.weekday?.id;
                            allItems.push(item);
                        });
                    }
                });
            }
            return allItems;
        } catch (error) { return []; }
    }
    return { processBangumiPage, processDailyCalendar };
})();


// ===============屏蔽配置===============
const GENRE_STORAGE_KEY = "forward_blocked_genres";
const STORAGE_KEY = "forward_blocked_items";

const TMDB_GENRE_MAPPING = {
    "\u771f\u4eba\u79c0": 10764,
    "\u8131\u53e3\u79c0": 10767, 
    "\u7efc\u827a": 10764,
    "\u7eaa\u5f55\u7247": 99,
    "\u52a8\u4f5c\u5192\u9669": 10759,
    "\u52a8\u753b": 16,
    "\u559c\u5267": 35,
    "\u72af\u7f6a": 80,
    "\u5267\u60c5": 18,
    "\u5bb6\u5ead": 10751,
    "\u513f\u7ae5": 10762,
    "\u60ac\u7591": 9648,
    "\u65b0\u95fb": 10763,
    "\u79d1\u5e7b\u5947\u5e7b": 10765,
    "\u80a5\u7682\u5267": 10766,
    "\u6218\u4e89\u653f\u6cbb": 10768,
    "\u897f\u90e8": 37,
    "\u52a8\u4f5c": 28,
    "\u5192\u9669": 12,
    "\u5386\u53f2": 36,
    "\u5947\u5e7b": 14,
    "\u6050\u6016": 27,
    "\u97f3\u4e50": 10402,
    "\u7231\u60c5": 10749,
    "\u79d1\u5e7b": 878,
    "\u7535\u89c6\u7535\u5f71": 10770,
    "\u60ca\u609a": 53,
    "\u6218\u4e89": 10752
};

const REVERSE_GENRE_MAPPING = Object.fromEntries(
    Object.entries(TMDB_GENRE_MAPPING).map(([name, id]) => [id, name])
);

let blockedIdCache = null;
let blockedGenresCache = null;
let blockedItemsCache = null;
let tmdbGenresCache = null;

function clearAllCaches() {
    blockedIdCache = null;
    blockedGenresCache = null;
    blockedItemsCache = null;
    tmdbGenresCache = null;
}

function clearBlockedIdCache() {
    blockedIdCache = null;
}

function clearBlockedGenresCache() {
    blockedGenresCache = null;
}

function clearBlockedItemsCache() {
    blockedItemsCache = null;
}


function getBlockedIdSet() {
    try {
        if (blockedIdCache) {
            return blockedIdCache;
        }
        
        const blockedItems = getBlockedItems();
        const idSet = new Set();
        
        for (let i = 0; i < blockedItems.length; i++) {
            const item = blockedItems[i];
            const idStr = String(item.id);
            const idNum = parseInt(item.id);
            
            idSet.add(idStr + "_" + item.media_type);
            idSet.add(idNum + "_" + item.media_type);
            
            idSet.add(idStr);
            idSet.add(idNum);
        }
        
        blockedIdCache = idSet;
        return idSet;
    } catch (error) {
        return new Set();
    }
}

function getBlockedGenres() {
    try {
        if (blockedGenresCache) {
            return blockedGenresCache;
        }
        
        const stored = Widget.storage.get(GENRE_STORAGE_KEY);
        blockedGenresCache = stored ? JSON.parse(stored) : [];
        return blockedGenresCache;
    } catch (error) {
        return [];
    }
}

function saveBlockedGenres(genres) {
    try {
        Widget.storage.set(GENRE_STORAGE_KEY, JSON.stringify(genres));
        blockedGenresCache = genres;
        clearBlockedIdCache();
        return true;
    } catch (error) {
        return false;
    }
}

function getBlockedItems() {
    try {
        if (blockedItemsCache) {
            return blockedItemsCache;
        }
        
        const stored = Widget.storage.get(STORAGE_KEY);
        blockedItemsCache = stored ? JSON.parse(stored) : [];
        return blockedItemsCache;
    } catch (error) {
        return [];
    }
}

function saveBlockedItems(items) {
    try {
        Widget.storage.set(STORAGE_KEY, JSON.stringify(items));
        blockedItemsCache = items;
        clearBlockedIdCache();
        return true;
    } catch (error) {
        return false;
    }
}

function isItemBlocked(item) {
    if (!item || !item.id) return false;
    
    const blockedIdSet = getBlockedIdSet();
    const itemId = String(item.id);
    const itemIdNum = parseInt(item.id);
    
    if (blockedIdSet.has(itemId) || blockedIdSet.has(itemIdNum)) {
        return true;
    }
    
    if (item.mediaType || item.media_type) {
        const mediaType = item.mediaType || item.media_type;
        if (blockedIdSet.has(itemId + "_" + mediaType) || blockedIdSet.has(itemIdNum + "_" + mediaType)) {
            return true;
        }
    }
    
    if (item.originalDoubanId) {
        const doubanId = String(item.originalDoubanId);
        const doubanIdNum = parseInt(item.originalDoubanId);
        if (blockedIdSet.has(doubanId) || blockedIdSet.has(doubanIdNum)) {
            return true;
        }
    }
    
    return false;
}

function isItemBlockedByGenre(item) {
    if (!item || !item.genre_ids) return false;
    
    const blockedGenres = getBlockedGenres();
    const blockedGenreIds = new Set(blockedGenres.map(g => g.id));
    
    return item.genre_ids.some(genreId => blockedGenreIds.has(genreId));
}

function isItemBlockedEnhanced(item) {
    if (isItemBlocked(item)) {
        return true;
    }
    
    if (isItemBlockedByGenre(item)) {
        return true;
    }
    
    return false;
}

function filterBlockedItemsEnhanced(items) {
    if (!Array.isArray(items)) return items;
    
    const blockedIdSet = getBlockedIdSet();
    const blockedGenres = getBlockedGenres();
    const blockedGenreIds = new Set(blockedGenres.map(g => g.id));
    
    const filtered = [];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (!item || !item.id) {
            filtered.push(item);
            continue;
        }
        
        const itemId = String(item.id);
        const itemIdNum = parseInt(item.id);
        if (blockedIdSet.has(itemId) || blockedIdSet.has(itemIdNum)) {
            continue;
        }
        
        if (item.genre_ids && item.genre_ids.some(genreId => blockedGenreIds.has(genreId))) {
            continue;
        }
        
        if (item.mediaType || item.media_type) {
            const mediaType = item.mediaType || item.media_type;
            if (blockedIdSet.has(itemId + "_" + mediaType) || blockedIdSet.has(itemIdNum + "_" + mediaType)) {
                continue;
            }
        }
        
        if (item.originalDoubanId) {
            const doubanId = String(item.originalDoubanId);
            const doubanIdNum = parseInt(item.originalDoubanId);
            if (blockedIdSet.has(doubanId) || blockedIdSet.has(doubanIdNum)) {
                continue;
            }
        }
        
        filtered.push(item);
    }
    
    return filtered;
}

function addBlockedGenre(genreName, genreId, description = "") {
    const blockedGenres = getBlockedGenres();
    
    const exists = blockedGenres.some(blocked => 
        blocked.id === genreId || blocked.name === genreName
    );
    
    if (!exists) {
        blockedGenres.push({
            id: genreId,
            name: genreName,
            description: description || `\u5c4f\u853d\u6240\u6709"${genreName}"\u7c7b\u578b\u7684\u5185\u5bb9`,
            blocked_date: new Date().toISOString()
        });
        
        return saveBlockedGenres(blockedGenres);
    }
    
    return false;
}

function removeBlockedGenre(genreId) {
    const blockedGenres = getBlockedGenres();
    const filtered = blockedGenres.filter(genre => genre.id !== genreId);
    return saveBlockedGenres(filtered);
}


function addBlockedItem(item) {
    const blockedItems = getBlockedItems();
    
    const exists = blockedItems.some(blocked => 
        blocked.id === String(item.id) && blocked.media_type === item.media_type
    );
    
    if (!exists) {
        blockedItems.push({
            id: String(item.id),
            media_type: item.media_type,
            title: item.title,
            poster_path: item.poster_path,
            overview: item.overview,
            blocked_date: new Date().toISOString(),
            vote_average: item.vote_average || 0
        });
        
        return saveBlockedItems(blockedItems);
    }
    
    return false;
}

function removeBlockedItem(id, mediaType) {
    const blockedItems = getBlockedItems();
    const filtered = blockedItems.filter(item => 
        !(item.id === String(id) && item.media_type === mediaType)
    );
    
    return saveBlockedItems(filtered);
}

function clearBlockedItems() {
    try {
        Widget.storage.clear();
        clearAllCaches();
        return true;
    } catch (error) {
        return false;
    }
}

// ===============辅助函数===============
async function fetchTmdbGenres() {
    if (tmdbGenresCache) return tmdbGenresCache;
    
    const [movieGenres, tvGenres] = await Promise.all([
        Widget.tmdb.get('/genre/movie/list', { params: { language: 'zh-CN' } }),
        Widget.tmdb.get('/genre/tv/list', { params: { language: 'zh-CN' } })
    ]);
    
    tmdbGenresCache = {
        movie: movieGenres.genres.reduce((acc, g) => ({ ...acc, [g.id]: g.name }), {}),
        tv: tvGenres.genres.reduce((acc, g) => ({ ...acc, [g.id]: g.name }), {})
    };
    return tmdbGenresCache;
}

function getTmdbGenreTitles(genreIds, mediaType) {
    const genres = tmdbGenresCache?.[mediaType] || {};
    const topThreeIds = genreIds.slice(0, 3); 
    return topThreeIds
        .map(id => genres[id]?.trim() || `\u672a\u77e5\u7c7b\u578b(${id})`)
        .filter(Boolean)
        .join('\u2022');
}

function getDoubanGenreTitles(genres, itemType) {
    if (!genres) {
        return "";
    }
    
    let genreArray = [];
    
    if (typeof genres === 'string') {
        const cleanGenres = genres.trim();
        if (cleanGenres) {
            if (cleanGenres.includes(',')) {
                genreArray = cleanGenres.split(',');
            } else if (cleanGenres.includes('\u3001')) {
                genreArray = cleanGenres.split('\u3001');
            } else if (cleanGenres.includes('/')) {
                genreArray = cleanGenres.split('/');
            } else if (cleanGenres.includes(' ')) {
                genreArray = cleanGenres.split(' ');
            } else {
                genreArray = [cleanGenres];
            }
        }
    } 
    else if (Array.isArray(genres)) {
        genreArray = genres.filter(g => g && g.trim());
    } 
    else {
        const genreStr = String(genres).trim();
        if (genreStr && genreStr !== 'undefined' && genreStr !== 'null') {
            genreArray = [genreStr];
        }
    }
    
    genreArray = genreArray
        .map(g => g.trim())
        .filter(g => g && g !== '')
        .filter((genre, index, arr) => arr.indexOf(genre) === index);
    
    if (genreArray.length === 0) {
        return "";
    }
    
    const topThreeGenres = genreArray.slice(0, 3);
    return topThreeGenres.join(' ');
}

function extractGenresFromText(text) {
    if (!text) return [];
    
    const genreKeywords = [
        '\u52a8\u4f5c', '\u79d1\u5e7b', '\u707e\u96be', '\u7231\u60c5', '\u559c\u5267', '\u60ac\u7591', '\u72af\u7f6a', '\u5192\u9669', '\u5947\u5e7b', '\u6218\u4e89',
        '\u5386\u53f2', '\u6b66\u4fa0', '\u60ca\u609a', '\u6050\u6016', '\u60c5\u8272', '\u52a8\u753b', '\u5267\u60c5', '\u897f\u90e8', '\u5bb6\u5ead', '\u97f3\u4e50',
        '\u8fd0\u52a8', '\u53e4\u88c5', '\u6b4c\u821e', '\u4f20\u8bb0', '\u77ed\u7247', '\u7eaa\u5f55\u7247', '\u6587\u827a', '\u9752\u6625', '\u6821\u56ed', '\u804c\u573a',
        '\u90fd\u5e02', '\u519c\u6751', '\u519b\u4e8b', '\u8b66\u50a3', '\u8c0d\u6218', '\u5bab\u5ef7', '\u795e\u8bdd', '\u9b54\u5e7b'
    ];
    
    const foundGenres = [];
    
    const typePattern = /(?:\u7c7b\u578b|genre)[\uff1a:\s]*([^\n\r]+)/i;
    const typeMatch = text.match(typePattern);
    if (typeMatch) {
        const typeText = typeMatch[1];
        const types = typeText.split(/[\/\u3001,,\s]+/).filter(t => t.trim());
        foundGenres.push(...types);
    }
    
    for (const keyword of genreKeywords) {
        if (text.includes(keyword) && !foundGenres.includes(keyword)) {
            foundGenres.push(keyword);
        }
    }
    
    return foundGenres.slice(0, 3);
}

function formatItemDescription(item) {
    let description = item.description || '';
    const hasRating = /\u8bc4\u5206|rating/i.test(description);
    const hasYear = /\u5e74\u4efd|year/i.test(description);
    const hasType = /\u7c7b\u578b|type/i.test(description);
    
    if (item.itemType && !hasType) {
        description = `\u7c7b\u578b: ${item.itemType} | ${description}`;
    }
    
    if (item.rating && !hasRating) {
        description = `\u8bc4\u5206: ${item.rating} | ${description}`;
    }
    
    if (item.releaseDate && !hasYear) {
        const year = String(item.releaseDate).substring(0,4);
        if (/^\d{4}$/.test(year)) {
            description = `\u5e74\u4efd: ${year} | ${description}`;
        }
    }
    
    return description
        .replace(/^\|\s*/, '')
        .replace(/\s*\|$/, '')
        .trim();
}

function calculatePagination(params) {
    let page = parseInt(params.page) || 1;
    const limit = parseInt(params.limit) || 20;
    
    if (typeof params.start !== 'undefined') {
        page = Math.floor(parseInt(params.start) / limit) + 1;
    }
    
    const start = (page - 1) * limit;
    return { page, limit, start };
}

function getBeijingDate() {
    const now = new Date();
    const beijingTime = now.getTime() + (8 * 60 * 60 * 1000);
    const beijingDate = new Date(beijingTime);
    return `${beijingDate.getUTCFullYear()}-${String(beijingDate.getUTCMonth() + 1).padStart(2, '0')}-${String(beijingDate.getUTCDate()).padStart(2, '0')}`;
}

function parseDoubanAppDispatchUrl(url) {
    const cleanedUrl = url.replace(/\s+/g, '').trim();
    const questionMarkIndex = cleanedUrl.indexOf('?');
    const queryString = cleanedUrl.substring(questionMarkIndex + 1);
    
    const params = {};
    const paramPairs = queryString.split('&');
    for (const pair of paramPairs) {
        const [key, value] = pair.split('=');
        params[decodeURIComponent(key)] = decodeURIComponent(value);
    }
    
    const uriParam = params['uri'];
    const cleanUri = (uriParam.startsWith('/') ? uriParam.substring(1) : uriParam).trim();
    
    if (cleanUri.includes('subject_collection/')) {
        return `https://m.douban.com/${cleanUri}`;
    }
    else if (cleanUri.includes('doulist/')) {
        return `https://www.douban.com/${cleanUri}`;
    }
    
    return null;
}

// =============TMDB功能函数============
const MIN_VOTE_COUNT = {
  movie: 50,
  tv: 30
};

const POPULARITY_QUALITY_STANDARDS = {
  movie: {
    minVoteCount: 50,
    minVoteAverage: 5.0
  },
  tv: {
    minVoteCount: 10,
    minVoteAverage: 5.0
  }
};

const DOMESTIC_PLATFORMS = ['2007', '1330', '1419', '1605', '1631'];

const DOMESTIC_MIN_VOTE_COUNT = {
  tv: 5
};

const DOMESTIC_PLATFORM_STANDARDS = {
  movie: {
    minVoteCount: 15,
    minVoteAverage: 4.5
  },
  tv: {
    minVoteCount: 5,
    minVoteAverage: 4.5
  }
};

const CN_COUNTRY_CODE = 'CN';
const isDomesticCN = (region) => region === CN_COUNTRY_CODE;

async function fetchTmdbData(api, params) {
    const [data, genres] = await Promise.all([
        Widget.tmdb.get(api, { params: params }),
        fetchTmdbGenres()
    ]);

    const filteredResults = data.results
        .filter((item) => {
            const mediaType = item.media_type || (item.title ? 'movie' : 'tv');
            const sortBy = params.sort_by || '';

            let passesFilter = item.poster_path &&
                   item.id &&
                   (item.title || item.name) &&
                   (item.title || item.name).trim().length > 0 &&
                   item.genre_ids && 
                   Array.isArray(item.genre_ids) && 
                   item.genre_ids.length >= 1;

            if (passesFilter && sortBy === 'vote_average.desc') {
                const isDomestic = DOMESTIC_PLATFORMS.includes(String(params.with_networks));
                const minVoteCount = isDomestic
                    ? DOMESTIC_MIN_VOTE_COUNT[mediaType]
                    : (MIN_VOTE_COUNT[mediaType] || MIN_VOTE_COUNT.movie);
                passesFilter = passesFilter && (item.vote_count >= minVoteCount);
            }

            return passesFilter;
        })
        .map((item) => {
            const mediaType = item.media_type || (item.title ? 'movie' : 'tv');
            const genreIds = item.genre_ids || [];
            const genreTitle = getTmdbGenreTitles(genreIds, mediaType);

            return {
                id: item.id,
                type: "tmdb",
                title: item.title || item.name,
                description: item.overview,
                releaseDate: item.release_date || item.first_air_date,
                backdropPath: item.backdrop_path,
                posterPath: item.poster_path,
                rating: item.vote_average,
                mediaType: mediaType,
                genreTitle: genreTitle,
                genre_ids: genreIds
            };
        });

    return filterBlockedItemsEnhanced(filteredResults);
}

async function loadTmdbTrendingData() {
    try {
        const response = await Widget.http.get("https://for-ward.vercel.app/data/TMDB_Trending.json", {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15'
            }
        });
        return response.data;
    } catch (error) {
        try {
            const fallbackResponse = await Widget.http.get("https://for-ward.vercel.app/data/TMDB_Trending.json");
            return fallbackResponse.data;
        } catch (fallbackError) {
            throw fallbackError;
        }
    }
}

async function loadTodayHotTV(params) {
  const page = parseInt(params.page) || 1;
  const region = params.sort_by || '';         
  const sortBy = 'popularity.desc';           
  const isPopularitySort = (s) => s === 'popularity.desc';
  const isDomesticCN = (r) => r === 'CN';

  if (region) {
    const std = isDomesticCN(region) && isPopularitySort(sortBy)
      ? DOMESTIC_PLATFORM_STANDARDS.tv
      : POPULARITY_QUALITY_STANDARDS.tv;

    const discoverParams = {
      language: params.language || 'zh-CN',
      page: page,
      with_origin_country: region,
      sort_by: sortBy,
      'vote_count.gte': std.minVoteCount,
      'vote_average.gte': std.minVoteAverage
    };

    const [data, genres] = await Promise.all([
      Widget.tmdb.get('/discover/tv', { params: discoverParams }),
      fetchTmdbGenres()
    ]);

    const items = data.results
      .filter((it) => it.poster_path && it.genre_ids?.length)
      .map((it) => ({
        id: String(it.id),
        type: 'tmdb',
        title: it.name,
        description: it.overview,
        releaseDate: it.first_air_date,
        backdropPath: it.backdrop_path,
        posterPath: it.poster_path,
        rating: it.vote_average,
        mediaType: 'tv',
        genreTitle: getTmdbGenreTitles(it.genre_ids, 'tv'),
        genre_ids: it.genre_ids
      }));

    return filterBlockedItemsEnhanced(items);
  }

  if (page === 1) {
    try {
      const data = await loadTmdbTrendingData();
      const allTv = data.today_tv || [];
      const tvItems = [];
      for (let i = 0; i < allTv.length && tvItems.length < 20; i++) {
        const it = allTv[i];
        if (it.type === 'tv' && it.poster_url && it.genre_ids?.length) {
          tvItems.push({
            id: it.id.toString(),
            type: 'tmdb',
            title: it.title,
            genreTitle: it.genreTitle,
            rating: it.rating,
            description: it.overview,
            releaseDate: it.release_date,
            posterPath: it.poster_url,
            backdropPath: it.title_backdrop,
            mediaType: 'tv',
            genre_ids: it.genre_ids || []
          });
        }
      }
      return filterBlockedItemsEnhanced(tvItems);
    } catch (e) {
    }
  }

  const std = POPULARITY_QUALITY_STANDARDS.tv;
  const fallbackParams = {
    language: params.language || 'zh-CN',
    page: page,
    sort_by: sortBy,
    'vote_count.gte': std.minVoteCount,
    'vote_average.gte': std.minVoteAverage
  };

  const [data, genres] = await Promise.all([
    Widget.tmdb.get('/discover/tv', { params: fallbackParams }),
    fetchTmdbGenres()
  ]);

  const items = data.results
    .filter((it) => it.poster_path && it.genre_ids?.length)
    .map((it) => ({
      id: String(it.id),
      type: 'tmdb',
      title: it.name,
      description: it.overview,
      releaseDate: it.first_air_date,
      backdropPath: it.backdrop_path,
      posterPath: it.poster_path,
      rating: it.vote_average,
      mediaType: 'tv',
      genreTitle: getTmdbGenreTitles(it.genre_ids, 'tv'),
      genre_ids: it.genre_ids
    }));

  return filterBlockedItemsEnhanced(items);
}

async function loadTodayHotMovies(params) {
  const page = parseInt(params.page) || 1;
  const region = params.sort_by || '';
  const sortBy = 'popularity.desc';

  const isPopularitySort = (s) => s === 'popularity.desc';
  const isDomesticCN = (r) => r === 'CN';

  if (region) {
    const std = isDomesticCN(region) && isPopularitySort(sortBy)
      ? DOMESTIC_PLATFORM_STANDARDS.movie
      : POPULARITY_QUALITY_STANDARDS.movie;

    const discoverParams = {
      language: params.language || 'zh-CN',
      page: page,
      with_origin_country: region,
      sort_by: sortBy,
      'vote_count.gte': std.minVoteCount,
      'vote_average.gte': std.minVoteAverage
    };

    const [data, genres] = await Promise.all([
      Widget.tmdb.get('/discover/movie', { params: discoverParams }),
      fetchTmdbGenres()
    ]);

    const items = data.results
      .filter((it) => it.poster_path && it.genre_ids?.length)
      .map((it) => ({
        id: String(it.id),
        type: 'tmdb',
        title: it.title,
        description: it.overview,
        releaseDate: it.release_date,
        backdropPath: it.backdrop_path,
        posterPath: it.poster_path,
        rating: it.vote_average,
        mediaType: 'movie',
        genreTitle: getTmdbGenreTitles(it.genre_ids, 'movie'),
        genre_ids: it.genre_ids
      }));

    return filterBlockedItemsEnhanced(items);
  }

  if (page === 1) {
    try {
      const data = await loadTmdbTrendingData();
      const allMovies = data.today_movies || [];
      const movieItems = [];
      for (let i = 0; i < allMovies.length && movieItems.length < 20; i++) {
        const it = allMovies[i];
        if (it.type === 'movie' && it.poster_url && it.genre_ids?.length) {
          movieItems.push({
            id: it.id.toString(),
            type: 'tmdb',
            title: it.title,
            genreTitle: it.genreTitle,
            rating: it.rating,
            description: it.overview,
            releaseDate: it.release_date,
            posterPath: it.poster_url,
            backdropPath: it.title_backdrop,
            mediaType: 'movie',
            genre_ids: it.genre_ids || []
          });
        }
      }
      return filterBlockedItemsEnhanced(movieItems);
    } catch (e) {
    }
  }

  const std = POPULARITY_QUALITY_STANDARDS.movie;
  const fallbackParams = {
    language: params.language || 'zh-CN',
    page: page,
    sort_by: sortBy,
    'vote_count.gte': std.minVoteCount,
    'vote_average.gte': std.minVoteAverage
  };

  const [data, genres] = await Promise.all([
    Widget.tmdb.get('/discover/movie', { params: fallbackParams }),
    fetchTmdbGenres()
  ]);

  const items = data.results
    .filter((it) => it.poster_path && it.genre_ids?.length)
    .map((it) => ({
      id: String(it.id),
      type: 'tmdb',
      title: it.title,
      description: it.overview,
      releaseDate: it.release_date,
      backdropPath: it.backdrop_path,
      posterPath: it.poster_path,
      rating: it.vote_average,
      mediaType: 'movie',
      genreTitle: getTmdbGenreTitles(it.genre_ids, 'movie'),
      genre_ids: it.genre_ids
    }));

  return filterBlockedItemsEnhanced(items);
}

async function tmdbTopRated(params) {
    const type = params.type || 'movie';
    const api = type === 'movie' ? `movie/top_rated` : `tv/top_rated`;
    
    const [data, genres] = await Promise.all([
        Widget.tmdb.get(api, { params: params }),
        fetchTmdbGenres()
    ]);

    const filteredResults = data.results
        .filter((item) => {
            const mediaType = item.media_type || (item.title ? 'movie' : 'tv');
            const minVoteCount = MIN_VOTE_COUNT[type] || MIN_VOTE_COUNT.movie;
            
            return item.poster_path &&
                   item.id &&
                   (item.title || item.name) &&
                   (item.title || item.name).trim().length > 0 &&
                   item.genre_ids && 
                   Array.isArray(item.genre_ids) && 
                   item.genre_ids.length >= 1 &&
                   item.vote_count >= minVoteCount;
        })
        .map((item) => {
            const mediaType = item.media_type || (item.title ? 'movie' : 'tv');
            const genreIds = item.genre_ids || [];
            const genreTitle = getTmdbGenreTitles(genreIds, mediaType);

            return {
                id: item.id,
                type: "tmdb",
                title: item.title || item.name,
                description: item.overview,
                releaseDate: item.release_date || item.first_air_date,
                backdropPath: item.backdrop_path,
                posterPath: item.poster_path,
                rating: item.vote_average,
                mediaType: mediaType,
                genreTitle: genreTitle,
                genre_ids: genreIds
            };
        });

    return filterBlockedItemsEnhanced(filteredResults);
}

async function tmdbDiscoverByNetwork(params = {}) {
  const api = "discover/tv";
  const beijingDate = getBeijingDate();
  const sortBy = params.sort_by || "first_air_date.desc";

  const discoverParams = {
    language: params.language || 'zh-CN',
    page: params.page || 1,
    with_networks: params.with_networks,
    sort_by: sortBy
  };
  
  if (sortBy === 'vote_average.desc') {
    const isDomestic = DOMESTIC_PLATFORMS.includes(String(params.with_networks));
    const std = isDomestic ? DOMESTIC_MIN_VOTE_COUNT.tv : MIN_VOTE_COUNT.tv;
    discoverParams['vote_count.gte'] = std;
  }

  if (params.air_status === 'released') {
    discoverParams['first_air_date.lte'] = beijingDate;
  } else if (params.air_status === 'upcoming') {
    discoverParams['first_air_date.gte'] = beijingDate;
  }
  if (params.with_genres) {
    discoverParams.with_genres = params.with_genres;
  }

  return await fetchTmdbData(api, discoverParams);
}

async function tmdbCompanies(params = {}) {
  const api = "discover/movie";
  const beijingDate = getBeijingDate();
  const withCompanies = String(params.with_companies || '').trim();
  const sortBy = params.sort_by || "primary_release_date.desc";

  const cleanParams = {
    page: params.page || 1,
    language: params.language || "zh-CN",
    sort_by: sortBy,
    include_adult: false,
    include_video: false
  };

  if (sortBy === 'vote_average.desc') {
    cleanParams['vote_count.gte'] = MIN_VOTE_COUNT.movie;
  }

  if (sortBy === 'popularity.desc') {
    cleanParams['vote_count.gte'] = POPULARITY_QUALITY_STANDARDS.movie.minVoteCount;
    cleanParams['vote_average.gte'] = POPULARITY_QUALITY_STANDARDS.movie.minVoteAverage;
  }

  if (sortBy === 'vote_count.desc') {
    cleanParams['vote_average.gte'] = 6.0;
  }

  if (withCompanies) {
    cleanParams.with_companies = withCompanies;
  }
  if (params.air_status === 'released') {
    cleanParams['primary_release_date.lte'] = beijingDate;
  } else if (params.air_status === 'upcoming') {
    cleanParams['primary_release_date.gte'] = beijingDate;
  }
  if (params.with_genres) {
    cleanParams.with_genres = String(params.with_genres).trim();
  }

  return await fetchTmdbData(api, cleanParams);
}

// ===============搜索屏蔽==============
async function searchTMDB(query, language) {
    if (!query || query.trim().length === 0) {
        throw new Error("\u641c\u7d22\u5173\u952e\u8bcd\u4e0d\u80fd\u4e3a\u7a7a");
    }

    try {
        const response = await Widget.tmdb.get("/search/multi", {
            params: {
                query: query.trim(),
                language: language || "zh-CN",
                page: 1
            }
        });

        if (!response) {
            throw new Error("TMDB API\u65e0\u54cd\u5e94");
        }

        let results = [];
        if (response.results) {
            results = response.results;
        } else if (response.data && response.data.results) {
            results = response.data.results;
        } else if (Array.isArray(response)) {
            results = response;
        } else {
            throw new Error("\u65e0\u6cd5\u89e3\u6790TMDB\u54cd\u5e94\u7ed3\u6784");
        }

        const filteredResults = [];
        for (let i = 0; i < results.length && filteredResults.length < 20; i++) {
            const item = results[i];
            if ((item.media_type === "movie" || item.media_type === "tv") &&
                item.id &&
                (item.title || item.name) &&
                item.poster_path) {
                
                const title = item.title || item.name;
                const releaseDate = item.release_date || item.first_air_date;
                const year = releaseDate ? new Date(releaseDate).getFullYear() : "";
                
                filteredResults.push({
                    id: String(item.id),
                    media_type: item.media_type,
                    title: title,
                    poster_path: item.poster_path,
                    overview: item.overview || "",
                    vote_average: item.vote_average || 0,
                    release_date: releaseDate,
                    year: year
                });
            }
        }
        
        return filteredResults;
        
    } catch (error) {
        throw new Error("\u641c\u7d22\u5931\u8d25: " + error.message);
    }
}

async function searchAndBlockByGenre(params) {
    const action = params.action || "search_only";
    const genreName = params.genre_name ? params.genre_name.trim() : '';
    
    if (!genreName) {
        return [{
            id: "no_genre_name",
            type: "info",
            title: "\u26a0 \u8bf7\u8f93\u5165\u8981\u5c4f\u853d\u7684\u7c7b\u578b\u540d\u79f0",
            description: "\u4f8b\u5982\uff1a\u771f\u4eba\u79c0\u3001\u7efc\u827a\u3001\u7eaa\u5f55\u7247\u3001\u52a8\u4f5c\u3001\u7231\u60c5\u7b49",
            posterPath: "",
            backdropPath: "",
            rating: 0,
            mediaType: "info"
        }];
    }
    
    const matchedGenres = [];
    const lowerGenreName = genreName.toLowerCase();
    
    for (const [name, id] of Object.entries(TMDB_GENRE_MAPPING)) {
        if (name.includes(genreName) || genreName.includes(name) || 
            name.toLowerCase().includes(lowerGenreName)) {
            matchedGenres.push({ name, id });
        }
    }
    
    if (matchedGenres.length === 0) {
        const suggestions = Object.keys(TMDB_GENRE_MAPPING).slice(0, 10);
        return [{
            id: "no_genre_match",
            type: "info",
            title: "\u2753 \u672a\u627e\u5230\u5339\u914d\u7684\u7c7b\u578b",
            description: `\u672a\u627e\u5230\u4e0e"${genreName}"\u5339\u914d\u7684\u7c7b\u578b\u3002\n\n\u652f\u6301\u7684\u7c7b\u578b\u5305\u62ec\uff1a\n${suggestions.join('\u3001')}`,
            posterPath: "",
            backdropPath: "",
            rating: 0,
            mediaType: "info"
        }];
    }
    
    const resultItems = [];
    
    if (action === "search_only") {
        resultItems.push({
            id: "genre_search_summary",
            type: "info",
            title: "\u1f50d \u627e\u5230\u5339\u914d\u7684\u7c7b\u578b",
            description: `\u641c\u7d22"${genreName}"\u627e\u5230 ${matchedGenres.length} \u4e2a\u5339\u914d\u7c7b\u578b\uff1a\n\n${matchedGenres.map(g => `\u2022 ${g.name} (ID: ${g.id})`).join('\n')}\n\n\u9009\u62e9"\u641c\u7d22\u5e76\u5c4f\u853d"\u6a21\u5f0f\u53ef\u5c06\u8fd9\u4e9b\u7c7b\u578b\u52a0\u5165\u5c4f\u853d\u5217\u8868\u3002`,
            posterPath: "",
            backdropPath: "",
            rating: 0,
            mediaType: "info"
        });
        
        for (const genre of matchedGenres) {
            const blockedGenres = getBlockedGenres();
            const isBlocked = blockedGenres.some(blocked => blocked.id === genre.id);
            const status = isBlocked ? "\u1f6ab \u5df2\u5c4f\u853d" : "\u2705 \u53ef\u5c4f\u853d";
            
            resultItems.push({
                id: `genre_detail_${genre.id}`,
                type: "info", 
                title: `${status} ${genre.name}`,
                description: `TMDB\u7c7b\u578bID: ${genre.id}\n${isBlocked ? '\u6b64\u7c7b\u578b\u5df2\u5728\u5c4f\u853d\u5217\u8868\u4e2d' : '\u53ef\u4ee5\u5c4f\u853d\u6b64\u7c7b\u578b\u7684\u6240\u6709\u5185\u5bb9'}`,
                posterPath: "",
                backdropPath: "",
                rating: 0,
                mediaType: "info"
            });
        }
        
    } else if (action === "search_and_block") {
        let blockedCount = 0;
        let alreadyBlockedCount = 0;
        
        for (const genre of matchedGenres) {
            const success = addBlockedGenre(genre.name, genre.id);
            if (success) {
                blockedCount++;
            } else {
                alreadyBlockedCount++;
            }
            
            const status = success ? "\u2705 \u5df2\u5c4f\u853d" : "\u1f6ab \u5df2\u5b58\u5728";
            resultItems.push({
                id: `blocked_genre_${genre.id}`,
                type: "info",
                title: `${status} ${genre.name}`,
                description: `TMDB\u7c7b\u578bID: ${genre.id}\n${success ? '\u5df2\u6dfb\u52a0\u5230\u7c7b\u578b\u5c4f\u853d\u5217\u8868' : '\u6b64\u7c7b\u578b\u5df2\u5728\u5c4f\u853d\u5217\u8868\u4e2d'}`,
                posterPath: "",
                backdropPath: "",
                rating: 0,
                mediaType: "info"
            });
        }
        
        resultItems.unshift({
            id: "genre_block_summary",
            type: "info",
            title: "\u1f3af \u7c7b\u578b\u5c4f\u853d\u64cd\u4f5c\u5b8c\u6210",
            description: `\u641c\u7d22"${genreName}"\u627e\u5230 ${matchedGenres.length} \u4e2a\u7c7b\u578b\n\u65b0\u589e\u5c4f\u853d: ${blockedCount} \u4e2a\n\u5df2\u5b58\u5728: ${alreadyBlockedCount} \u4e2a\n\n\u5305\u542b\u8fd9\u4e9b\u7c7b\u578b\u7684\u6240\u6709\u5185\u5bb9\u5c06\u4e0d\u518d\u5728\u699c\u5355\u4e2d\u663e\u793a\u3002`,
            posterPath: "",
            backdropPath: "",
            rating: 0,
            mediaType: "info"
        });
    }
    
    return resultItems;
}

const originalFilterBlockedItems = filterBlockedItems;

function filterBlockedItems(items) {
    return filterBlockedItemsEnhanced(items);
}

function addToBlockList(tmdbId, mediaType = "movie", title = "", additionalInfo = {}) {
  try {
    const stored = Widget.storage.get(STORAGE_KEY);
    const blockedItems = stored ? JSON.parse(stored) : [];
    
    const itemId = String(tmdbId);
    
    let exists = false;
    for (let i = 0; i < blockedItems.length; i++) {
      if (blockedItems[i].id === itemId && blockedItems[i].media_type === mediaType) {
        exists = true;
        break;
      }
    }
    
    if (!exists) {
      blockedItems.push({
        id: itemId,
        media_type: mediaType,
        title: title || `TMDB ID: ${itemId}`,
        poster_path: additionalInfo.poster_path || "",
        overview: additionalInfo.overview,
        blocked_date: new Date().toISOString(),
        vote_average: additionalInfo.vote_average || 0
      });
      
      Widget.storage.set(STORAGE_KEY, JSON.stringify(blockedItems));
      clearBlockedIdCache();
      clearBlockedItemsCache();
      return true;
    }
    
    return false;
  } catch (error) {
    return false;
  }
}

async function searchAndBlock(params) {
  const blockType = params.block_type || "by_name";
  const action = params.action || "search_only";
  
  if (blockType === "by_genre") {
    return await searchAndBlockByGenre({
      action: action,
      genre_name: params.genre_name
    });
  } else if (blockType === "manual_id") {
    const tmdbId = params.tmdb_id ? params.tmdb_id.trim() : '';
    const mediaType = params.media_type || "movie";
    
    if (!tmdbId) {
      return [{
        id: "no_id",
        type: "info",
        title: "\u26a0 \u8bf7\u8f93\u5165TMDB ID",
        description: "\u5728\u4e0a\u65b9\u8f93\u5165\u6846\u4e2d\u8f93\u5165\u8981\u5c4f\u853d\u7684TMDB ID\uff0c\u7136\u540e\u91cd\u65b0\u8fd0\u884c\u6b64\u6a21\u5757\u3002",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      }];
    }

    if (!/^\d+$/.test(tmdbId)) {
      return [{
        id: "invalid_id",
        type: "error",
        title: "\u274c \u65e0\u6548\u7684ID\u683c\u5f0f",
        description: "TMDB ID\u5e94\u8be5\u662f\u7eaf\u6570\u5b57\uff0c\u4f8b\u5982\uff1a550\u30011399",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "error"
      }];
    }

    try {
      const endpoint = mediaType === "movie" ? "/movie/" + tmdbId : "/tv/" + tmdbId;
      
      const response = await Widget.tmdb.get(endpoint, {
        params: { language: "zh-CN" }
      });

      let item = null;
      if (response && response.data) {
        item = response.data;
      } else if (response && (response.title || response.name)) {
        item = response;
      } else {
        throw new Error("\u65e0\u6cd5\u89e3\u6790\u8be6\u60c5\u54cd\u5e94\u7ed3\u6784");
      }

      const title = item.title || item.name;
      
      if (!title) {
        return [{
          id: "not_found",
          type: "error",
          title: "\u274c \u5185\u5bb9\u4e0d\u5b58\u5728",
          description: "\u672a\u627e\u5230ID\u4e3a " + tmdbId + " \u7684" + (mediaType === "movie" ? "\u7535\u5f71" : "\u5267\u96c6"),
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "error"
        }];
      }

      const blockItem = {
        id: tmdbId,
        media_type: mediaType,
        title: title,
        poster_path: item.poster_path,
        overview: item.overview,
        vote_average: item.vote_average
      };

      const success = addBlockedItem(blockItem);
      const mediaTypeText = mediaType === "movie" ? "\u7535\u5f71" : "\u5267\u96c6";
      const ratingText = item.vote_average ? " \u2b50" + item.vote_average.toFixed(1) : "";
      
      return [{
        id: "manual_block_result_" + tmdbId,
        type: "info",
        title: success ? "\u2705 \u5c4f\u853d\u6210\u529f" : "\u2139\ufe0f \u5df2\u5b58\u5728",
        description: success ? 
          mediaTypeText + "\"" + title + "\"" + ratingText + "\u5df2\u6dfb\u52a0\u5230\u9ed1\u540d\u5355" : 
          mediaTypeText + "\"" + title + "\"" + ratingText + "\u5df2\u5728\u9ed1\u540d\u5355\u4e2d",
        posterPath: item.poster_path ? "https://image.tmdb.org/t/p/w500" + item.poster_path : "",
        backdropPath: "",
        rating: item.vote_average || 0,
        mediaType: mediaType
      }];

    } catch (error) {
      return [{
        id: "manual_block_error",
        type: "error", 
        title: "\u274c \u5c4f\u853d\u5931\u8d25",
        description: "\u9519\u8bef\u4fe1\u606f: " + error.message,
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "error"
      }];
    }
  } else {
    const query = params.query ? params.query.trim() : '';
    const language = params.language || "zh-CN";
    
    if (!query) {
      return [{
        id: "no_query",
        type: "info",
        title: "\u26a0 \u8bf7\u8f93\u5165\u641c\u7d22\u5173\u952e\u8bcd",
        description: "\u5728\u4e0a\u65b9\u8f93\u5165\u6846\u4e2d\u8f93\u5165\u8981\u641c\u7d22\u7684\u5f71\u7247\u6216\u5267\u96c6\u540d\u79f0\uff0c\u7136\u540e\u91cd\u65b0\u8fd0\u884c\u6b64\u6a21\u5757\u3002",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      }];
    }

    try {
      const searchResults = await searchTMDB(query, language);
      
      if (searchResults.length === 0) {
        return [{
          id: "no_results",
          type: "info", 
          title: "\u1f50d \u672a\u627e\u5230\u5339\u914d\u7ed3\u679c",
          description: "\u6ca1\u6709\u627e\u5230\u4e0e\"" + query + "\"\u76f8\u5173\u7684\u5f71\u7247\u6216\u5267\u96c6\uff0c\u8bf7\u5c1d\u8bd5\u5176\u4ed6\u5173\u952e\u8bcd\u3002",
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "info"
        }];
      }

      const resultItems = [];
      
      if (action === "search_only") {
        const blockedItems = getBlockedItems();
        const blockedIds = new Set();
        for (let i = 0; i < blockedItems.length; i++) {
          blockedIds.add(blockedItems[i].id + "_" + blockedItems[i].media_type);
        }
        
        for (let i = 0; i < searchResults.length; i++) {
          const item = searchResults[i];
          const isBlocked = blockedIds.has(item.id + "_" + item.media_type);
          const mediaTypeText = item.media_type === "movie" ? "\u7535\u5f71" : "\u5267\u96c6";
          const yearText = item.year ? " (" + item.year + ")" : "";
          const ratingText = item.vote_average ? " \u2b50" + item.vote_average.toFixed(1) : "";
          const statusText = isBlocked ? " \u1f6ab\u5df2\u5c4f\u853d" : "";
          
          resultItems.push({
            id: "search_" + item.id + "_" + item.media_type,
            type: "info",
            title: item.title + yearText + statusText,
            description: mediaTypeText + ratingText + " (TMDB ID: " + item.id + ") | " + (item.overview || "\u6682\u65e0\u7b80\u4ecb"),
            posterPath: item.poster_path ? "https://image.tmdb.org/t/p/w500" + item.poster_path : "",
            backdropPath: "",
            rating: item.vote_average || 0,
            mediaType: item.media_type
          });
        }
        
        resultItems.unshift({
          id: "search_summary",
          type: "info",
          title: "\u1f50d \u641c\u7d22\u7ed3\u679c",
          description: "\u641c\u7d22\"" + query + "\"\u627e\u5230 " + searchResults.length + " \u4e2a\u7ed3\u679c\n\n" +
                       "\u5982\u9700\u5c4f\u853d\u8fd9\u4e9b\u5185\u5bb9\uff0c\u8bf7\u9009\u62e9\"\u641c\u7d22\u5e76\u5c4f\u853d\"\u6a21\u5f0f\u3002",
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "info"
        });
        
      } else {
        let blockedCount = 0;
        let alreadyBlockedCount = 0;
        
        for (let i = 0; i < searchResults.length; i++) {
          const item = searchResults[i];
          const mediaTypeText = item.media_type === "movie" ? "\u7535\u5f71" : "\u5267\u96c6";
          const yearText = item.year ? " (" + item.year + ")" : "";
          const ratingText = item.vote_average ? " \u2b50" + item.vote_average.toFixed(1) : "";
          
          const blockItem = {
            id: item.id,
            media_type: item.media_type,
            title: item.title,
            poster_path: item.poster_path,
            overview: item.overview,
            vote_average: item.vote_average
          };
          
          const success = addBlockedItem(blockItem);
          if (success) {
            blockedCount++;
          } else {
            alreadyBlockedCount++;
          }
          
          const status = success ? "\u2705 \u5df2\u5c4f\u853d" : "\u1f6ab \u5df2\u5b58\u5728";
          
          resultItems.push({
            id: "blocked_" + item.id + "_" + item.media_type,
            type: "info",
            title: status + " " + item.title + yearText,
            description: mediaTypeText + ratingText + " (TMDB ID: " + item.id + ") | " + (item.overview || "\u6682\u65e0\u7b80\u4ecb"),
            posterPath: item.poster_path ? "https://image.tmdb.org/t/p/w500" + item.poster_path : "",
            backdropPath: "",
            rating: item.vote_average || 0,
            mediaType: item.media_type
          });
        }
        
        resultItems.unshift({
          id: "block_summary",
          type: "info",
          title: "\u1f3af \u5c4f\u853d\u64cd\u4f5c\u5b8c\u6210",
          description: "\u641c\u7d22\"" + query + "\"\u627e\u5230 " + searchResults.length + " \u4e2a\u7ed3\u679c\n" +
                       "\u65b0\u589e\u5c4f\u853d: " + blockedCount + " \u4e2a\n" +
                       "\u5df2\u5b58\u5728: " + alreadyBlockedCount + " \u4e2a\n\n" +
                       "\u8fd9\u4e9b\u5185\u5bb9\u5c06\u4e0d\u518d\u5728\u4efb\u4f55TMDB\u699c\u5355\u4e2d\u663e\u793a\u3002",
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "info"
        });
      }
      
      return resultItems;
      
    } catch (error) {
      return [{
        id: "error",
        type: "error",
        title: "\u274c \u641c\u7d22\u5931\u8d25",
        description: "\u9519\u8bef\u4fe1\u606f: " + error.message,
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "error"
      }];
    }
  }
}

// =============屏蔽管理=============
async function manageBlockedItems(params) {
  const manageType = params.manage_type || "items";
  const action = params.action || "view";
  
  if (manageType === "genres") {
    if (action === "unblock") {
      const genreId = params.unblock_id ? parseInt(params.unblock_id.trim()) : null;
      
      if (!genreId) {
        return [{
          id: "no_genre_id",
          type: "info",
          title: "\u26a0 \u8bf7\u8f93\u5165\u8981\u53d6\u6d88\u5c4f\u853d\u7684\u7c7b\u578bID",
          description: "\u5728\u4e0a\u65b9\u8f93\u5165\u6846\u4e2d\u8f93\u5165\u8981\u53d6\u6d88\u5c4f\u853d\u7684\u7c7b\u578bID\uff0c\u7136\u540e\u91cd\u65b0\u8fd0\u884c\u3002",
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "info"
        }];
      }
      
      const success = removeBlockedGenre(genreId);
      const genreName = REVERSE_GENRE_MAPPING[genreId] || `\u7c7b\u578bID: ${genreId}`;
      
      return [{
        id: "unblock_genre_result",
        type: "info",
        title: success ? "\u2705 \u53d6\u6d88\u5c4f\u853d\u6210\u529f" : "\u274c \u64cd\u4f5c\u5931\u8d25",
        description: success ? 
          `\u7c7b\u578b"${genreName}"\u5df2\u4ece\u5c4f\u853d\u5217\u8868\u4e2d\u79fb\u9664\uff0c\u5c06\u91cd\u65b0\u5728\u699c\u5355\u4e2d\u663e\u793a\u3002` : 
          `\u672a\u627e\u5230ID\u4e3a ${genreId} \u7684\u7c7b\u578b\uff0c\u6216\u53d6\u6d88\u5c4f\u853d\u65f6\u51fa\u73b0\u9519\u8bef\u3002`,
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      }];
    }
    
    if (action === "clear") {
      try {
        Widget.storage.remove(GENRE_STORAGE_KEY);
        clearBlockedGenresCache();
        clearBlockedIdCache();
        return [{
          id: "clear_genres_result",
          type: "info",
          title: "\u2705 \u7c7b\u578b\u5c4f\u853d\u5217\u8868\u5df2\u6e05\u7a7a",
          description: "\u6240\u6709\u88ab\u5c4f\u853d\u7684\u7c7b\u578b\u5df2\u88ab\u79fb\u9664\uff0c\u5185\u5bb9\u5c06\u91cd\u65b0\u5728\u699c\u5355\u4e2d\u663e\u793a\u3002",
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "info"
        }];
      } catch (error) {
        return [{
          id: "clear_genres_error",
          type: "error",
          title: "\u274c \u6e05\u7a7a\u5931\u8d25",
          description: "\u6e05\u7a7a\u7c7b\u578b\u5c4f\u853d\u5217\u8868\u65f6\u51fa\u73b0\u9519\u8bef\u3002",
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "error"
        }];
      }
    }
    
    const blockedGenres = getBlockedGenres();
    
    if (blockedGenres.length === 0) {
      return [{
        id: "empty_genre_list",
        type: "info",
        title: "\u7c7b\u578b\u5c4f\u853d\u5217\u8868\u4e3a\u7a7a",
        description: "\u5f53\u524d\u6ca1\u6709\u5c4f\u853d\u4efb\u4f55\u5185\u5bb9\u7c7b\u578b\u3002\u5728\u5c4f\u853d\u7c7b\u578b\u9009\u62e9\"\u6309\u5185\u5bb9\u7c7b\u578b\"\u6dfb\u52a0\u8981\u5c4f\u853d\u7684\u7c7b\u578b\u3002",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      }];
    }
    
    const resultItems = [];
    
    resultItems.push({
      id: "genre_unblock_help",
      type: "info",
      title: "\ud83d\udca1 \u53d6\u6d88\u7c7b\u578b\u5c4f\u853d\u8bf4\u660e",
      description: "\u8981\u53d6\u6d88\u5c4f\u853d\u67d0\u4e2a\u7c7b\u578b\uff0c\u8bf7\uff1a\ud83d\udcdd \u8bb0\u4f4f\u8981\u53d6\u6d88\u7684\u7c7b\u578bID\uff0c\u2699\ufe0f \u9009\u62e9\"\u53d6\u6d88\u5c4f\u853d\"\u64cd\u4f5c\uff0c\u270f\ufe0f \u8f93\u5165\u5bf9\u5e94\u7684\u7c7b\u578bID",
      posterPath: "",
      backdropPath: "",
      rating: 0,
      mediaType: "info"
    });
    
    const sortedGenres = [...blockedGenres].sort((a, b) => 
      new Date(b.blocked_date) - new Date(a.blocked_date)
    );
    
    for (const genre of sortedGenres) {
      const blockedDate = new Date(genre.blocked_date).toLocaleDateString();
      
      resultItems.push({
        id: `blocked_genre_${genre.id}`,
        type: "blocked_genre",
        title: `\ud83d\udeab ${genre.name}`,
        description: `\u7c7b\u578bID: ${genre.id} | \u5c4f\u853d\u4e8e: ${blockedDate}\n${genre.description}`,
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "genre",
        genreId: genre.id,
        genreName: genre.name
      });
    }
    
    return resultItems;
  } else {
    if (action === "unblock") {
      const unblockId = params.unblock_id ? params.unblock_id.trim() : '';
      const mediaType = params.unblock_media_type || "tv";
      
      if (!unblockId) {
        return [{
          id: "no_unblock_id",
          type: "info",
          title: "\u26a0 \u8bf7\u8f93\u5165\u8981\u53d6\u6d88\u5c4f\u853d\u7684ID",
          description: "\u5728\u4e0a\u65b9\u8f93\u5165\u6846\u4e2d\u8f93\u5165\u8981\u53d6\u6d88\u5c4f\u853d\u7684TMDB ID\uff0c\u7136\u540e\u91cd\u65b0\u8fd0\u884c\u3002",
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "info"
        }];
      }

      if (!/^\d+$/.test(unblockId)) {
        return [{
          id: "invalid_unblock_id",
          type: "error",
          title: "\u274c \u65e0\u6548\u7684ID\u683c\u5f0f",
          description: "TMDB ID\u5e94\u8be5\u662f\u7eaf\u6570\u5b57\uff0c\u4f8b\u5982\uff1a2190\u3001550",
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "error"
        }];
      }

      const success = removeBlockedItem(unblockId, mediaType);
      const mediaTypeText = mediaType === "movie" ? "\u7535\u5f71" : "\u5267\u96c6";
      
      return [{
        id: "unblock_result",
        type: "info",
        title: success ? "\u2705 \u53d6\u6d88\u5c4f\u853d\u6210\u529f" : "\u274c \u64cd\u4f5c\u5931\u8d25",
        description: success ? 
          mediaTypeText + " ID " + unblockId + " \u5df2\u4ece\u9ed1\u540d\u5355\u4e2d\u79fb\u9664\uff0c\u5c06\u91cd\u65b0\u5728\u699c\u5355\u4e2d\u663e\u793a\u3002" : 
          "\u672a\u627e\u5230ID\u4e3a " + unblockId + " \u7684" + mediaTypeText + "\uff0c\u6216\u53d6\u6d88\u5c4f\u853d\u65f6\u51fa\u73b0\u9519\u8bef\u3002",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      }];
    }
    
    if (action === "clear") {
      const success = clearBlockedItems();
      return [{
        id: "clear_result",
        type: "info",
        title: success ? "\u2705 \u9ed1\u540d\u5355\u5df2\u6e05\u7a7a" : "\u274c \u6e05\u7a7a\u5931\u8d25",
        description: success ? "\u6240\u6709\u5c4f\u853d\u9879\u5df2\u88ab\u79fb\u9664\uff0cWidget\u5b58\u50a8\u5df2\u6e05\u7a7a" : "\u6e05\u7a7a\u9ed1\u540d\u5355\u65f6\u51fa\u73b0\u9519\u8bef",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      }];
    }

    if (action === "export") {
      const blockedItems = getBlockedItems();
      const idList = blockedItems.map(item => item.id).join(',');
      
      return [{
        id: "export_result",
        type: "info",
        title: "\ud83d\udce4 \u5bfc\u51fa\u5c4f\u853d\u914d\u7f6e",
        description: `\u5f53\u524d\u5c4f\u853d\u7684ID\u5217\u8868\uff08${blockedItems.length}\u4e2a\uff09\uff1a\n\n${idList || '\u65e0'}`,
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      }];
    }

    if (action === "import") {
      const importData = params.import_data ? params.import_data.trim() : '';
      if (!importData) {
        return [{
          id: "import_empty",
          type: "info",
          title: "\u26a0 \u8bf7\u8f93\u5165\u5bfc\u5165\u6570\u636e",
          description: "\u5728\u4e0a\u65b9\u8f93\u5165\u6846\u4e2d\u8f93\u5165\u8981\u5bfc\u5165\u7684TMDB ID\u5217\u8868\uff08\u7528\u9017\u53f7\u5206\u9694\uff09\uff0c\u7136\u540e\u91cd\u65b0\u8fd0\u884c\u3002",
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "info"
        }];
      }

      try {
        let cleanedData = importData;
        
        cleanedData = cleanedData.replace(/['"]/g, '');
        
        const idArray = cleanedData.split(',');
        const ids = [];
        for (let i = 0; i < idArray.length; i++) {
          const id = idArray[i].trim();
          if (/^\d+$/.test(id)) {
            ids.push(id);
          }
        }
        
        let importedCount = 0;
        const blockedItems = getBlockedItems();

        for (let i = 0; i < ids.length; i++) {
          const id = ids[i];
          const exists = blockedItems.some(item => item.id === id);
          if (!exists) {
            blockedItems.push({
              id: id,
              media_type: "movie",
              title: `TMDB ID: ${id}`,
              poster_path: "",
              overview: "\u901a\u8fc7ID\u5bfc\u5165\u7684\u5c4f\u853d\u9879",
              blocked_date: new Date().toISOString(),
              vote_average: 0
            });
            importedCount++;
          }
        }

        const success = saveBlockedItems(blockedItems);
        
        return [{
          id: "import_result",
          type: "info",
          title: success ? `\u2705 \u5bfc\u5165\u6210\u529f` : "\u274c \u5bfc\u5165\u5931\u8d25",
          description: success ? 
            `\u6210\u529f\u5bfc\u5165 ${importedCount} \u4e2a\u65b0\u7684\u5c4f\u853d\u9879\uff0c\u603b\u8ba1 ${blockedItems.length} \u4e2a\u5c4f\u853d\u9879` :
            "\u5bfc\u5165\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u9519\u8bef",
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "info"
        }];
      } catch (error) {
        return [{
          id: "import_error",
          type: "error",
          title: "\u274c \u5bfc\u5165\u5931\u8d25",
          description: `\u9519\u8bef\u4fe1\u606f: ${error.message}`,
          posterPath: "",
          backdropPath: "",
          rating: 0,
          mediaType: "error"
        }];
      }
    }
    
    const blockedItems = getBlockedItems();
    
    if (blockedItems.length === 0) {
      return [{
        id: "empty_list",
        type: "info",
        title: "\u9ed1\u540d\u5355\u4e3a\u7a7a",
        description: "\u5f53\u524d\u6ca1\u6709\u5c4f\u853d\u4efb\u4f55\u5185\u5bb9\u3002\u4f7f\u7528\"TMDB \u641c\u7d22\u5c4f\u853d\"\u529f\u80fd\u6dfb\u52a0\u8981\u5c4f\u853d\u7684\u5f71\u7247\u3002",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      }];
    }

    const sortedItems = [];
    for (let i = 0; i < blockedItems.length; i++) {
      sortedItems.push(blockedItems[i]);
    }
    
    sortedItems.sort(function(a, b) {
      return new Date(b.blocked_date) - new Date(a.blocked_date);
    });

    const resultItems = [];
    
    if (sortedItems.length > 0) {
      resultItems.push({
        id: "unblock_help",
        type: "info",
        title: "\ud83d\udca1 \u53d6\u6d88\u5c4f\u853d\u8bf4\u660e",
        description: "\u8981\u53d6\u6d88\u5c4f\u853d\u67d0\u4e2a\u5185\u5bb9\uff0c\u8bf7\uff1a\ud83d\udcdd \u8bb0\u4f4f\u8981\u53d6\u6d88\u7684TMDB ID\uff0c\u2699\ufe0f \u9009\u62e9\"\u53d6\u6d88\u5c4f\u853d\"\u64cd\u4f5c\uff0c\u270f\ufe0f \u8f93\u5165\u5bf9\u5e94\u7684ID\u548c\u5a92\u4f53\u7c7b\u578b",
        posterPath: "",
        backdropPath: "",
        rating: 0,
        mediaType: "info"
      });
    }
    
    for (let i = 0; i < sortedItems.length; i++) {
      const item = sortedItems[i];
      const mediaTypeText = item.media_type === "movie" ? "\u7535\u5f71" : "\u5267\u96c6";
      const blockedDate = new Date(item.blocked_date).toLocaleDateString();
      const ratingText = item.vote_average ? " \u2b50" + item.vote_average.toFixed(1) : "";
      
      resultItems.push({
        id: "blocked_" + item.id + "_" + item.media_type,
        type: "blocked_item",
        title: "\ud83d\udeab " + item.title,
        description: mediaTypeText + ratingText + " | TMDB ID: " + item.id + " | \u5c4f\u853d\u4e8e: " + blockedDate + "\n" + (item.overview || "\u6682\u65e0\u7b80\u4ecb"),
        posterPath: item.poster_path ? "https://image.tmdb.org/t/p/w500" + item.poster_path : "",
        backdropPath: "",
        rating: item.vote_average || 0,
        mediaType: item.media_type,
        tmdbId: item.id,
        tmdbMediaType: item.media_type
      });
    }
    
    return resultItems;
  }
}

async function loadDetail(link) {
  try {
    if (link.startsWith("block://")) {
      const parts = link.replace("block://", "").split("/");
      const [id, mediaType, encodedTitle] = parts;
      const title = decodeURIComponent(encodedTitle);
      
      const endpoint = mediaType === "movie" ? "/movie/" + id : "/tv/" + id;
      
      const response = await Widget.tmdb.get(endpoint, {
        params: { language: "zh-CN" }
      });

      let item = null;
      if (response && response.data) {
        item = response.data;
      } else if (response && (response.title || response.name)) {
        item = response;
      } else {
        throw new Error("\u65e0\u6cd5\u89e3\u6790\u8be6\u60c5\u54cd\u5e94\u7ed3\u6784");
      }
      const blockItem = {
        id: id,
        media_type: mediaType,
        title: item.title || item.name,
        poster_path: item.poster_path,
        overview: item.overview,
        vote_average: item.vote_average
      };

      const success = addBlockedItem(blockItem);
      const mediaTypeText = mediaType === "movie" ? "\u7535\u5f71" : "\u5267\u96c6";
      const ratingText = item.vote_average ? ` \u2b50${item.vote_average.toFixed(1)}` : "";
      
      return {
        videoUrl: "",
        title: success ? "\u2705 \u5c4f\u853d\u6210\u529f" : "\u2139\ufe0f \u5df2\u5b58\u5728",
        description: success ? 
          `${mediaTypeText}"${title}"${ratingText}\u5df2\u6dfb\u52a0\u5230\u9ed1\u540d\u5355\uff0c\u5c06\u4e0d\u518d\u5728\u5e94\u7528\u4e2d\u663e\u793a\u3002\n\n\u6570\u636e\u5df2\u4fdd\u5b58\u5230Widget.storage\u4e2d\uff0c\u6240\u6709\u699c\u5355\u90fd\u4f1a\u81ea\u52a8\u8fc7\u6ee4\u6b64\u5185\u5bb9\u3002` : 
          `${mediaTypeText}"${title}"${ratingText}\u5df2\u5728\u9ed1\u540d\u5355\u4e2d\u3002`
      };
      
    } else if (link.startsWith("unblock://")) {
      const parts = link.replace("unblock://", "").split("/");
      const [id, mediaType, encodedTitle] = parts;
      const title = decodeURIComponent(encodedTitle);
      
      const success = removeBlockedItem(id, mediaType);
      const mediaTypeText = mediaType === "movie" ? "\u7535\u5f71" : "\u5267\u96c6";
      
      return {
        videoUrl: "",
        title: success ? "\u2705 \u53d6\u6d88\u5c4f\u853d\u6210\u529f" : "\u274c \u64cd\u4f5c\u5931\u8d25",
        description: success ? 
          `${mediaTypeText}"${title}"\u5df2\u4ece\u9ed1\u540d\u5355\u4e2d\u79fb\u9664\uff0c\u5c06\u91cd\u65b0\u5728\u5e94\u7528\u4e2d\u663e\u793a\u3002\n\nWidget.storage\u5df2\u66f4\u65b0\uff0c\u6240\u6709\u699c\u5355\u5c06\u91cd\u65b0\u663e\u793a\u6b64\u5185\u5bb9\u3002` : 
          `\u53d6\u6d88\u5c4f\u853d${mediaTypeText}"${title}"\u65f6\u51fa\u73b0\u9519\u8bef\u3002`
      };
    }
    
    return {
      videoUrl: "",
      title: "\u274c \u65e0\u6548\u64cd\u4f5c",
      description: "\u65e0\u6cd5\u8bc6\u522b\u7684\u64cd\u4f5c\u7c7b\u578b\uff0c\u8bf7\u4f7f\u7528\u5c4f\u853d\u7ba1\u7406\u5668\u4e2d\u7684\u529f\u80fd\u3002"
    };
    
  } catch (error) {
    return {
      videoUrl: "",
      title: "\u274c \u64cd\u4f5c\u5931\u8d25", 
      description: `\u9519\u8bef\u4fe1\u606f: ${error.message}`
    };
  }
}

// =============豆瓣功能函数=============
async function loadDoubanItemsFromApi(params = {}) {
  const { start, limit } = calculatePagination(params);
  const url = params.url;
  const apiUrl = `${url}?start=${start}&count=${limit}&updated_at&items_only=1&for_mobile=1`;
  const listIdMatch = params.url.match(/subject_collection\/(\w+)/);
  const referer = listIdMatch ? `https://m.douban.com/subject_collection/${listIdMatch[1]}/` : 'https://m.douban.com/';
  const response = await Widget.http.get(apiUrl, {
    headers: {
      Referer: referer,
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
    },
  });
  
  const items = response.data.subject_collection_items;
  const processedItems = items.map((item) => {
    let genres = item.genres;
    
    if (!genres || (Array.isArray(genres) && genres.length === 0)) {
        const textToExtract = [
            item.card_subtitle,
            item.description,
            item.abstract
        ].filter(Boolean).join(' ');
        
        if (textToExtract) {
            const extractedGenres = extractGenresFromText(textToExtract);
            if (extractedGenres.length > 0) {
                genres = extractedGenres;
            }
        }
    }
   
    return {
      id: item.id,
      type: "douban",
      title: item.title,
      coverUrl: item.cover?.url,
      description: formatItemDescription({
          description: item.card_subtitle || item.description,
          rating: item.rating?.value,
          releaseDate: item.year
      }),
      rating: item.rating?.value,
      releaseDate: item.year,
      genreTitle: getDoubanGenreTitles(genres || [], null)
    };
  });
  
  return filterBlockedItemsEnhanced(processedItems);
}

async function loadDoubanHotList(params = {}) {
  const url = params.url;
  
  const uriMatch = url.match(/uri=([^&]+)/);
  if (!uriMatch) {
    throw new Error("\u65e0\u6cd5\u89e3\u6790\u8c46\u74e3dispatch URL");
  }
  
  const uri = decodeURIComponent(uriMatch[1]);
  const collectionMatch = uri.match(/\/subject_collection\/([^\/]+)/);
  if (!collectionMatch) {
    throw new Error("\u65e0\u6cd5\u4ece URI\u4e2d\u63d0\u53d6collection ID");
  }
  
  const collectionId = collectionMatch[1];
  
  const apiUrl = `https://m.douban.com/rexxar/api/v2/subject_collection/${collectionId}/items?updated_at&items_only=1&for_mobile=1`;
  const referer = `https://m.douban.com/subject_collection/${collectionId}/`;
  
  const response = await Widget.http.get(apiUrl, {
    headers: {
      Referer: referer,
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
    },
  });
  
  if (!response.data || !response.data.subject_collection_items) {
    throw new Error("\u83b7\u53d6\u8c46\u74e3\u70ed\u699c\u6570\u636e\u5931\u8d25");
  }
  
  const items = response.data.subject_collection_items;
  
  const processedItems = items.map((item) => {
    let genres = item.genres;
    
    if (!genres || (Array.isArray(genres) && genres.length === 0)) {
        const textToExtract = [
            item.card_subtitle,
            item.description,
            item.abstract
        ].filter(Boolean).join(' ');
        
        if (textToExtract) {
            const extractedGenres = extractGenresFromText(textToExtract);
            if (extractedGenres.length > 0) {
                genres = extractedGenres;
            }
        }
    }
    
    const itemType = determineItemType(item, params.type);
   
    return {
      id: item.id,
      type: "douban",
      title: item.title,
      coverUrl: item.cover?.url,
      description: formatItemDescription({
          description: item.card_subtitle || item.description,
          rating: item.rating?.value,
          releaseDate: item.year,
          itemType: itemType
      }),
      rating: item.rating?.value,
      releaseDate: item.year,
      genreTitle: getDoubanGenreTitles(genres || [], itemType),
      itemType: itemType
    };
  });
  
  return filterBlockedItemsEnhanced(processedItems);
}

function determineItemType(item, paramType) {
  if (paramType === "movie") return "\u7535\u5f71";
  if (paramType === "tv") return "\u5267\u96c6";
  if (paramType === "subject") {
    if (item.subtype === "movie") return "\u7535\u5f71";
    
    const cardSubtitle = item.card_subtitle || "";
    if (cardSubtitle.includes("\u7535\u5f71")) return "\u7535\u5f71";
    if (cardSubtitle.includes("\u5267\u96c6") || cardSubtitle.includes("\u7535\u89c6\u5267")) return "\u5267\u96c6";
    
    return "\u7efc\u5408";
  }
  return "\u672a\u77e5";
}

function detectMultiTypeItems(items) {
  const titleTypeMap = new Map();
  
  for (const item of items) {
    const title = item.title.trim();
    if (!titleTypeMap.has(title)) {
      titleTypeMap.set(title, new Set());
    }
    
    let itemType = item.type;
    if (item.subtype) {
      itemType = item.subtype;
    }
    
    titleTypeMap.get(title).add(itemType);
  }
  
  const multiTypesTitles = new Set();
  for (const [title, types] of titleTypeMap.entries()) {
    if (types.size > 1) {
      const hasMovieOrTv = types.has('movie') || types.has('tv');
      if (hasMovieOrTv) {
        multiTypesTitles.add(title);
      }
    }
  }
  
  return items.map(item => {
    const title = item.title.trim();
    const isMultiType = multiTypesTitles.has(title);
    
    return {
      ...item,
      shouldUseMultiTypeMatching: isMultiType
    };
  });
}

function detectItemTypeFromContent(item) {
  const aliases = (item.original_title || item.aka || item.alternate_title || "").toLowerCase();
  if (aliases.includes("\u7535\u5f71\u7248") || aliases.includes("(\u7535\u5f71)") || aliases.includes("movie")) {
    return "movie";
  }
  if (aliases.includes("\u7535\u89c6\u5267\u7248") || aliases.includes("(\u7535\u89c6\u5267)") || aliases.includes("tv") || aliases.includes("series")) {
    return "tv";
  }
  
  const description = (item.card_subtitle || item.description || item.abstract || "").toLowerCase();
  const title = (item.title || "").toLowerCase();
  
  if (description.includes("\u7535\u5f71") && !description.includes("\u7535\u89c6") && !description.includes("\u5267")) {
    return "movie";
  }
  
  if (description.includes("\u7535\u89c6\u5267") || description.includes("\u5267\u96c6") || description.includes("\u96c6\u6570") || 
      description.includes("\u5b63") || description.includes("\u5168") && description.includes("\u96c6")) {
    return "tv";
  }
  
  if (description.includes("\u52a8\u753b") || title.includes("\u52a8\u753b") || 
      description.includes("\u756a\u5267") || description.includes("anime") ||
      description.includes("animation") || aliases.includes("\u52a8\u753b")) {
    
    if (description.includes("\u7535\u5f71") || title.includes("\u7535\u5f71") || 
        description.includes("\u5267\u573a\u7248") || title.includes("\u5267\u573a\u7248")) {
      return "movie";
    }
    
    if (description.includes("\u756a\u5267") || description.includes("\u7b2c") && description.includes("\u5b63") ||
        description.includes("\u96c6") && !description.includes("\u7535\u5f71") ||
        description.includes("tv") || description.includes("series")) {
      return "tv";
    }
    
    return "multi";
  }
  
  if (description.includes("\u5206\u949f") || description.includes("min") || description.includes("\u5c0f\u65f6")) {
    return "movie";
  }
  
  if (title.includes("\u7535\u5f71\u7248")) {
    return "movie";
  }
  if (title.includes("\u7535\u89c6\u5267\u7248") || title.includes("\u5267\u7248")) {
    return "tv";
  }
  
  return null;
}

function detectAndAssignTypePreferences(items) {
  const titleItemsMap = new Map();
  
  for (const item of items) {
    const title = item.title.trim();
    if (!titleItemsMap.has(title)) {
      titleItemsMap.set(title, []);
    }
    titleItemsMap.get(title).push(item);
  }
  
  const multiItemTitles = new Set();
  for (const [title, titleItems] of titleItemsMap.entries()) {
    if (titleItems.length > 1) {
      const hasMultipleTypes = titleItems.some((item, index) => {
        const otherItems = titleItems.filter((_, i) => i !== index);
        const itemType = detectItemTypeFromContent(item);
        return otherItems.some(otherItem => {
          const otherType = detectItemTypeFromContent(otherItem);
          return itemType && otherType && itemType !== otherType;
        });
      });
      
      if (hasMultipleTypes) {
        multiItemTitles.add(title);
      } else {
        multiItemTitles.add(title);
      }
    }
  }
  
  const itemsWithPreferences = [];
  const processedTitles = new Map();
  
  for (const item of items) {
    const title = item.title.trim();
    const isMultiTypeTitle = multiItemTitles.has(title);
    
    let assignedTypePreference = null;
    
    if (isMultiTypeTitle) {
      if (!processedTitles.has(title)) {
        processedTitles.set(title, []);
      }
      
      const sameTitle = processedTitles.get(title);
      const currentCount = sameTitle.length;
      
      if (currentCount === 0) {
        assignedTypePreference = "movie";
      } else if (currentCount === 1) {
        assignedTypePreference = "tv";
      }
      
      sameTitle.push(item.id);
    }
    
    itemsWithPreferences.push({
      ...item,
      isMultiTypeTitle: isMultiTypeTitle,
      assignedTypePreference: assignedTypePreference
    });
  }
  
  return itemsWithPreferences;
}

async function fetchTmdbDataForDouban(key, mediaType) {
    let searchTypes = [];
    
    if (mediaType === "movie") {
        searchTypes = ["movie"];
    } else if (mediaType === "tv") {
        searchTypes = ["tv"];
    } else if (mediaType === "multi") {
        searchTypes = ["movie", "tv"];
    } else {
        searchTypes = ["movie", "tv"];
    }
    
    const allResults = [];
    
    for (const type of searchTypes) {
        try {
            const tmdbResults = await Widget.tmdb.get(`/search/${type}`, {
                params: {
                    query: key,
                    language: "zh_CN",
                }
            });
            
            if (tmdbResults.results && tmdbResults.results.length > 0) {
                const resultsWithType = tmdbResults.results.map(result => ({
                    ...result,
                    media_type: type
                }));
                allResults.push(...resultsWithType);
            }
        } catch (error) {
        }
    }
    
    return allResults;
}

function calculateSimilarity(str1, str2) {
    const cleanStr1 = str1.toLowerCase().replace(/[^\u4e00-\u9fa5a-z0-9]/g, '');
    const cleanStr2 = str2.toLowerCase().replace(/[^\u4e00-\u9fa5a-z0-9]/g, '');
    
    if (cleanStr1 === cleanStr2) return 1.0;
    
    const longer = cleanStr1.length > cleanStr2.length ? cleanStr1 : cleanStr2;
    const shorter = cleanStr1.length > cleanStr2.length ? cleanStr2 : cleanStr1;
    
    if (longer.length === 0) return 1.0;
    
    const editDistance = getEditDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
}

function getEditDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    
    return matrix[str2.length][str1.length];
}

function selectMatches(tmdbResults, originalTitle, originalYear, options = {}) {
    if (tmdbResults.length === 0) return options.returnArray ? [] : null;
    
    const {
        returnArray = false,
        preferredType = null,
        minThreshold = 0.7,
        doubanItem = null
    } = options;
    
    let actualPreferredType = preferredType;
    if (!actualPreferredType && doubanItem) {
        const detectedType = detectItemTypeFromContent(doubanItem);
        if (detectedType) {
            actualPreferredType = detectedType;
        } else if (doubanItem.subtype === "movie") {
            actualPreferredType = "movie";
        } else if (doubanItem.subtype === "tv") {
            actualPreferredType = "tv";
        }
    }
    
    if (!returnArray) {
        if (tmdbResults.length === 1) return tmdbResults[0];
        
        let bestMatch = null;
        let bestScore = 0;
        
        for (const result of tmdbResults) {
            let score = calculateMatchScore(result, originalTitle, originalYear);
            
            if (actualPreferredType && result.media_type === actualPreferredType) {
                score += 1.0;
            }
            
            if (score > bestScore) {
                bestScore = score;
                bestMatch = result;
            }
        }
        
        return bestMatch;
    } else {
        const resultsByType = {};
        for (const result of tmdbResults) {
            const mediaType = result.media_type;
            if (!resultsByType[mediaType]) {
                resultsByType[mediaType] = [];
            }
            resultsByType[mediaType].push(result);
        }
        
        const bestMatches = [];
        for (const [mediaType, results] of Object.entries(resultsByType)) {
            const bestMatch = selectMatches(results, originalTitle, originalYear, { preferredType: mediaType });
            if (bestMatch) {
                const score = calculateMatchScore(bestMatch, originalTitle, originalYear);
                if (score >= minThreshold) {
                    bestMatches.push(bestMatch);
                }
            }
        }
        
        bestMatches.sort((a, b) => {
            const scoreA = calculateMatchScore(a, originalTitle, originalYear);
            const scoreB = calculateMatchScore(b, originalTitle, originalYear);
            return scoreB - scoreA;
        });
        
        return bestMatches;
    }
}

function calculateMatchScore(result, originalTitle, originalYear) {
    const tmdbTitle = result.title || result.name || '';
    const originalName = result.original_title || result.original_name || '';
    
    const titleSimilarity = Math.max(
        calculateSimilarity(originalTitle, tmdbTitle),
        calculateSimilarity(originalTitle, originalName)
    );
    
    let exactMatchBonus = 0;
    if (titleSimilarity >= 0.98) {
        exactMatchBonus = 2.0;
    } else if (titleSimilarity >= 0.9) {
        exactMatchBonus = 1.0;
    }
    
    let yearBonus = 0;
    if (originalYear) {
        const tmdbYear = (result.release_date || result.first_air_date || '').substring(0, 4);
        if (tmdbYear && Math.abs(parseInt(originalYear) - parseInt(tmdbYear)) <= 1) {
            yearBonus = 0.2;
        }
    }
    
    const popularityBonus = Math.min(result.popularity / 10000, 0.05);
    const ratingBonus = Math.min(result.vote_average / 200, 0.025);
    
    return titleSimilarity + exactMatchBonus + yearBonus + popularityBonus + ratingBonus;
}

function generateGenreTitleFromTmdb(tmdbItem, doubanItem) {
    let genres = doubanItem.genres;
    
    if (!genres || (Array.isArray(genres) && genres.length === 0)) {
        const textToExtract = [
            doubanItem.card_subtitle,
            doubanItem.description,
            doubanItem.abstract
        ].filter(Boolean).join(' ');
        
        if (textToExtract) {
            const extractedGenres = extractGenresFromText(textToExtract);
            if (extractedGenres.length > 0) {
                genres = extractedGenres;
            }
        }
    }
    
    if (!genres || (Array.isArray(genres) && genres.length === 0)) {
        if (tmdbItem.genre_ids && tmdbItem.genre_ids.length > 0) {
            genres = tmdbItem.genre_ids.map(id => mapTmdbGenreIdToChineseName(id)).filter(Boolean);
        }
    }
    
    if (!genres || (Array.isArray(genres) && genres.length === 0)) {
        return "";
    }
    
    return getDoubanGenreTitles(genres, determineItemType(doubanItem, doubanItem.type));
}

function mapTmdbGenreIdToChineseName(genreId) {
    const genreMap = {
        28: "\u52a8\u4f5c", 12: "\u5192\u9669", 16: "\u52a8\u753b", 35: "\u559c\u5267", 80: "\u72af\u7f6a",
        99: "\u7eaa\u5f55\u7247", 18: "\u5267\u60c5", 10751: "\u5bb6\u5ead", 14: "\u5947\u5e7b", 36: "\u5386\u53f2",
        27: "\u6050\u6016", 10402: "\u97f3\u4e50", 9648: "\u60ac\u7591", 10749: "\u7231\u60c5", 878: "\u79d1\u5e7b",
        10770: "\u7535\u89c6\u7535\u5f71", 53: "\u60ca\u609a", 10752: "\u6218\u4e89", 37: "\u897f\u90e8",
        
        10759: "\u52a8\u4f5c\u5192\u9669", 16: "\u52a8\u753b", 35: "\u559c\u5267", 80: "\u72af\u7f6a", 99: "\u7eaa\u5f55\u7247",
        18: "\u5267\u60c5", 10751: "\u5bb6\u5ead", 10762: "\u513f\u7ae5", 9648: "\u60ac\u7591", 10763: "\u65b0\u95fb",
        10764: "\u771f\u4eba\u79c0", 10765: "\u79d1\u5e7b\u5947\u5e7b", 10766: "\u80a5\u7682\u5267", 10767: "\u8131\u53e3\u79c0",
        10768: "\u6218\u4e89\u653f\u6cbb", 37: "\u897f\u90e8"
    };
    
    return genreMap[genreId] || null;
}

async function fetchImdbItemsForDouban(scItems) {
    const promises = scItems.map(async (scItem) => {
        const titleNormalizationRules = [
            { pattern: /^\u771f\u7684\u662f\u5f88\u4e0d\u9519\u7684\u4eba/, replacement: '\uc9c4\uc9dc \uad1c\ucc2e\uc740 \uc0ac\ub78c', forceFirstResult: true },
            { pattern: /^\u6700\u540e\u590d\u6d3b\u6218/, replacement: '\u30d5\u30a1\u30a4\u30ca\u30eb\u30c9\u30e9\u30d5\u30c8', forceFirstResult: true },
            { pattern: /^\u66b4\u98ce\u5708/, replacement: '\ubd81\uadf9\uc131', forceFirstResult: true },
            { pattern: /^\u5510\u671d\u8be1\u4e8b\u5f55\u4e4b\u957f\u5b89/, replacement: '\u5510\u671d\u8be1\u4e8b\u5f55', forceFirstResult: true },
            { pattern: /^\u51e1\u4eba\u4fee\u4ed9\u4f20[\uff1a:]\u91cd\u8fd4\u5929\u5357/, replacement: '\u51e1\u4eba\u4fee\u4ed9\u4f20', forceFirstResult: true },
            { pattern: /^\u7f57\u5c0f\u9ed1\u6218\u8bb0/, replacement: '\u7f57\u5c0f\u9ed1\u6218\u8bb0', forceMovieType: true },
            { pattern: /^\u7d2b\u5ddd \u7b2c\u4e8c\u5b63/, replacement: '\u7d2b\u5ddd', forceFirstResult: true },
            { pattern: /^\u661f\u671f\u4e09 \u7b2c\u4e8c\u5b63/, replacement: 'Wednesday', forceFirstResult: true, forceTypeFilter: 'tv' },
            { pattern: /^\u66b4\u98ce\u5708/, replacement: '\ubd81\uadf9\uc131', forceFirstResult: true },
            { pattern: /^\u6d41\u4eba \u7b2c\u4e94\u5b63/, replacement: 'Slow Horses', forceFirstResult: true },
            { pattern: / \u7b2c[^\u5b63]*\u5b63/, replacement: '' },
            { pattern: /^\u5343\u4e0e\u5343\u5bfb/, replacement: '\u5343\u4e0e\u5343\u5bfb', forceMovieType: true },
            { pattern: /^\u54c8\u5c14\u7684\u79fb\u52a8\u57ce\u5821/, replacement: '\u54c8\u5c14\u7684\u79fb\u52a8\u57ce\u5821', forceMovieType: true },
            { pattern: /^\u9b3c\u706d\u4e4b\u5203/, replacement: '\u9b3c\u706d\u4e4b\u5203', forceMovieType: true },
            { pattern: /^\u5929\u6c14\u4e4b\u5b50/, replacement: '\u5929\u6c14\u4e4b\u5b50', forceMovieType: true },
            { pattern: /^\u5742\u672c\u65e5\u5e38 Part 2/, replacement: '\u5742\u672c\u65e5\u5e38' },
            { pattern: /^\u6ca7\u5143\u56fe2 \u5143\u521d\u5c71\u756a\u5916\u7bc7/, replacement: '\u6ca7\u5143\u56fe' },
            { pattern: /^\u82cd\u5170\u8bc02 \u5f71\u4e09\u754c\u7bc7/, replacement: '\u82cd\u5170\u8bc0 \u52a8\u753b\u7248', forceFirstResult: true },
            { pattern: /^\u77f3\u7eaa\u5143 \u7b2c\u56db\u5b63 Part 2/, replacement: '\u77f3\u7eaa\u5143' },
            { pattern: /^\u53cc\u4eba\u72ec\u81ea\u9732\u8425/, replacement: 'ふたりソロキャンプ' },
            { pattern: /^\u5730\u7f1a\u5c11\u5e74\u82b1\u5b50\u541b \u7b2c\u4e8c\u5b63 \u540e\u7bc7/, replacement: '\u5730\u7f1a\u5c11\u5e74\u82b1\u5b50\u541b' },
            { pattern: /^\u66f4\u8863\u4eba\u5076\u5760\u5165\u7231\u6cb3 \u7b2c\u4e8c\u5b63/, replacement: '\u66f4\u8863\u4eba\u5076\u5760\u5165\u7231\u6cb3', forceFirstResult: true },
            { pattern: /^\u574f\u5973\u5b69/, replacement: '\u4e0d\u826f\u5c11\u5973' },
            { pattern: /^\u82b1\u513f\u4e0e\u5c11\u5e74·\u540c\u5fc3\u5b63/, replacement: '\u82b1\u513f\u4e0e\u5c11\u5e74·\u540c\u5fc3\u5b63', forceFirstResult: true },
            { pattern: /^\u5954\u8dd1\u5427 \u7b2c\u4e5d\u5b63/, replacement: '\u5954\u8dd1\u5427!\u5144\u5f1f', forceFirstResult: true },
            { pattern: /^\u4e58\u98ce2025/, replacement: '\u4e58\u98ce2025', forceFirstResult: true },
            { pattern: /^\u4f60\u7684\u7231$/, replacement: '\ub108\uc758\uc5f0\uc560', forceFirstResult: true },
            { pattern: /^\u771f\u7684\u662f\u5f88\u4e0d\u9519\u7684\u4eba/, replacement: '\uc9c4\uc9dc \uad1c\ucc2e\uc740 \uc0ac\ub78c', forceFirstResult: true },
            { pattern: /^\u6700\u540e\u590d\u6d3b\u6218/, replacement: '\u30d5\u30a1\u30a4\u30ca\u30eb\u30c9\u30e9\u30d5\u30c8', forceFirstResult: true },
            { pattern: /^\u66b4\u98ce\u5708/, replacement: '\ubd81\uadf9\uc131', forceFirstResult: true },
            { pattern: / \u7b2c[^\u5b63]*\u5b63/, replacement: '' },
            { pattern: /^(\u6b4c\u624b|\u5168\u5458\u52a0\u901f\u4e2d)\d{4}$/, replacement: (match, showName) => {
                const showMap = {
                    '\u6b4c\u624b': '\u6211\u662f\u6b4c\u624b',
                    '\u5168\u5458\u52a0\u901f\u4e2d': '\u5168\u5458\u52a0\u901f\u4e2d'
                };
                return showMap[showName] || showName;
            }},
            { pattern: /^\u5954\u8dd1\u5427(?! ?\u5144\u5f1f)/, replacement: '\u5954\u8dd1\u5427\u5144\u5f1f' },
            { pattern: /^(.+?[^0-9])\d+$/, replacement: (match, baseName) => {
                if (/^(\u6b4c\u624b|\u5168\u5458\u52a0\u901f\u4e2d)\d{4}$/.test(match)) {
                    return match;
                }
                return baseName;
            }},
            { pattern: /^([^·]+)·(.*)$/, replacement: (match, part1, part2) => {
                if (part2 && !/^(\u6162\u4eab\u5b63|\u7b2c.*\u5b63)/.test(part2)) {
                    return part1 + part2;
                }
                return part1;
            }}
        ];
        
        let title = scItem.title;
        let forceFirstResult = false;
        let forceMovieType = false;
        let forceTypeFilter = null;
        
        for (const rule of titleNormalizationRules) {
            if (rule.pattern.test(title)) {
                if (typeof rule.replacement === 'function') {
                    title = title.replace(rule.pattern, rule.replacement);
                } else {
                    title = title.replace(rule.pattern, rule.replacement);
                }
                if (rule.forceFirstResult) {
                    forceFirstResult = true;
                }
                if (rule.forceMovieType) {
                    forceMovieType = true;
                }
                if (rule.forceTypeFilter) {
                    forceTypeFilter = rule.forceTypeFilter;
                }
                break;
            }
        }
        
        let year = null;
        if (scItem.year) {
            year = String(scItem.year);
        } else if (scItem.card_subtitle) {
            const yearMatch = scItem.card_subtitle.match(/(\d{4})/);
            if (yearMatch) year = yearMatch[1];
        }

        let searchType = scItem.type;
        
        if (forceMovieType) {
            searchType = "movie";
        } else {
            let detectedType = detectItemTypeFromContent(scItem);
            
            if (scItem.type === "multi") {
                if (detectedType) {
                    searchType = detectedType;
                } else if (scItem.subtype && (scItem.subtype === "movie" || scItem.subtype === "tv")) {
                    searchType = scItem.subtype;
                } else {
                    searchType = "multi";
                }
            }
        }
        
        const tmdbDatas = await fetchTmdbDataForDouban(title, searchType);

        if (tmdbDatas.length !== 0) {
            
            if (scItem.isMultiTypeTitle) {
                const allMatches = selectMatches(tmdbDatas, title, year, { 
                    returnArray: true, 
                    doubanItem: scItem
                });

                return allMatches
                    .filter(match => {
                        return match.poster_path &&
                               match.id &&
                               (match.title || match.name) &&
                               (match.title || match.name).trim().length > 0;
                    })
                    .map(match => ({
                        id: match.id,
                        type: "tmdb",
                        title: match.title ?? match.name,
                        description: match.overview,
                        releaseDate: match.release_date ?? match.first_air_date,
                        backdropPath: match.backdrop_path,
                        posterPath: match.poster_path,
                        rating: match.vote_average,
                        mediaType: match.media_type,
                        genreTitle: generateGenreTitleFromTmdb(match, scItem),
                        originalDoubanTitle: scItem.title,
                        originalDoubanYear: scItem.year,
                        originalDoubanId: scItem.id
                    }));
            } else {
                let bestMatch;
                
                if (forceFirstResult && tmdbDatas.length > 0) {
                    if (forceTypeFilter) {
                        bestMatch = tmdbDatas.find(item => item.media_type === forceTypeFilter) || tmdbDatas[0];
                    } else {
                        bestMatch = tmdbDatas[0];
                    }
                } else {
                    bestMatch = selectMatches(tmdbDatas, title, year, { 
                        doubanItem: scItem
                    });
                }
                
                if (bestMatch && bestMatch.poster_path && bestMatch.id && 
                    (bestMatch.title || bestMatch.name) && 
                    (bestMatch.title || bestMatch.name).trim().length > 0) {
                    return {
                        id: bestMatch.id,
                        type: "tmdb",
                        title: bestMatch.title ?? bestMatch.name,
                        description: bestMatch.overview,
                        releaseDate: bestMatch.release_date ?? bestMatch.first_air_date,
                        backdropPath: bestMatch.backdrop_path,
                        posterPath: bestMatch.poster_path,
                        rating: bestMatch.vote_average,
                        mediaType: bestMatch.media_type,
                        genreTitle: generateGenreTitleFromTmdb(bestMatch, scItem),
                        originalDoubanTitle: scItem.title,
                        originalDoubanYear: scItem.year,
                        originalDoubanId: scItem.id
                    };
                }
            }
        }
        return null;
    });

    const results = await Promise.all(promises);
    
    const allItems = [];
    for (const result of results) {
        if (result) {
            if (Array.isArray(result)) {
                allItems.push(...result);
            } else {
                allItems.push(result);
            }
        }
    }
    
    return filterBlockedItemsEnhanced(allItems);
}

async function loadEnhancedDoubanList(params = {}) {
    const url = params.url;
    
    if (url.includes("douban.com/doulist/")) {
        return loadEnhancedDefaultList(params);
    } 
    else if (url.includes("douban.com/subject_collection/")) {
        return loadEnhancedSubjectCollection(params);
    } 
    else if (url.includes("m.douban.com/doulist/")) {
        const desktopUrl = url.replace("m.douban.com", "www.douban.com");
        return loadEnhancedDefaultList({ ...params, url: desktopUrl });
    }
    else if (url.includes("douban.com/doubanapp/dispatch")) {
        const parsedUrl = parseDoubanAppDispatchUrl(url);
        return loadEnhancedDoubanList({ ...params, url: parsedUrl });
    }
    
    return [];
}

async function loadEnhancedDefaultList(params = {}) {
    const url = params.url;
    const listId = url.match(/doulist\/(\d+)/)?.[1];
    const page = params.page || 1;
    const count = 25;
    const start = (page - 1) * count;
    const pageUrl = `https://www.douban.com/doulist/${listId}/?start=${start}&sort=seq&playable=0&sub_type=`;

    const response = await Widget.http.get(pageUrl, {
        headers: {
            Referer: `https://movie.douban.com/explore`,
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
    });

    const docId = Widget.dom.parse(response.data);
    const videoElementIds = Widget.dom.select(docId, ".doulist-item .title a");

    let doubanItems = [];
    for (const itemId of videoElementIds) {
        const link = await Widget.dom.attr(itemId, "href");
        const text = await Widget.dom.text(itemId);
        const chineseTitle = text.trim().split(' ')[0];
        if (chineseTitle) {
            doubanItems.push({ title: chineseTitle, type: "multi" });
        }
    }

    return await fetchImdbItemsForDouban(doubanItems);
}

async function loadEnhancedItemsFromApi(params = {}) {
    const url = params.url;
    const listId = params.url.match(/subject_collection\/(\w+)/)?.[1];
    const response = await Widget.http.get(url, {
        headers: {
            Referer: `https://m.douban.com/subject_collection/${listId}/`,
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
    });

    const scItems = response.data.subject_collection_items;
    return await fetchImdbItemsForDouban(scItems);
}

async function loadEnhancedSubjectCollection(params = {}) {
    const listId = params.url.match(/subject_collection\/(\w+)/)?.[1];
    const page = params.page || 1;
    const count = 20;
    const start = (page - 1) * count;
    
    let pageUrl = `https://m.douban.com/rexxar/api/v2/subject_collection/${listId}/items?start=${start}&count=${count}&updated_at&items_only=1&type_tag&for_mobile=1`;
    if (params.type) {
        pageUrl += `&type=${params.type}`;
    }
    
    return await loadEnhancedItemsFromApi({ ...params, url: pageUrl });
}

