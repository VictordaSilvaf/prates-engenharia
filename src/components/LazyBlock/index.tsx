import LazyLoad from "react-lazyload";
import { Block } from "../Gallery/Block";

interface Props {
  url: string;
}

export function LazyBlock({url}: Props){
  return (
  <LazyLoad once className="w-72 h-72 p-1 transition-all hover:drop-shadow-lg grayscale hover:grayscale-0 hover:p-0">
      <a href="#">
        <img src={url} alt="" className="object-cover w-full h-full" />
      </a>
  </LazyLoad>
  )
}