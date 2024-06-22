import {
    createElement,
    createHeader,
} from "../../script/layout"

const page = document.querySelector(".page")

const header = createHeader()
page.append(header)

const title = createElement("h1", "title", "Мiй блог")

page.append(title)

const POST_LIST = [
    {
        category: [
            { text: "Важливо", id: 1 },
            { text: "Нова", id: 2 },
        ],
        info: "До бiса планувальник, наймаемо дизайнера i готуемося до презентацii, як Стiв Джобс",
        date: "25.01",
        viewed: false,
    },
    {
        category: [{ text: "Нова", id: 2 }],
        info: "Ми хотiли щоб у цьому чатi було близько 150 людей щоб зробити якiсний пак самопрезентацiй",
        date: "24.01",
        viewed: true,
    },
]

const createPost = () => {
    const postList = createElement("main", "post_list")

    POST_LIST.forEach((postData) => {
        const post = createElement(
            "div",
            postData.viewed
            ? "post button post--viewed"
            : "post button",
        )

        const postHeader = createElement("div", "post_header")

        const categoryList = createElement(
            "div",
            "post_category-list",
        )

        postData.category.forEach((category) => {
            const categorySpan = createElement(
                "span",
                "post_category post_category--${category.id}",
                category.text,
            )
            categoryList.append(categorySpan)
        })

        const dateSpan = createElement(
            "span",
            "post_date",
            postData.date,
        )
        postHeader.append(categoryList, dateSpan)

        const infoParagraph = createElement(
            "p",
            "post_info",
            postData.info,
        )
        post.append(postHeader, infoParagraph)

        postList.append(post)
    })

    return postList
}

const post = createPost()
page.append(post)