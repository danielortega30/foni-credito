import { Post } from "@/interfaces/Post.interface"
import { getRandomRange } from './../utils/rangeRandom';
import jsonPlaceApiClient from "@/api/jsonPlaceApiClient"

export const Get_Posts = ()=>{
    const {start, end}= getRandomRange()
    return jsonPlaceApiClient.get<Post[]>(`/posts?_start=${start}&_end=${end}`)
}

