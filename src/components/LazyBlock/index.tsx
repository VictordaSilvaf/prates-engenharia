import LazyLoad from "react-lazyload";
import { Block } from "../Gallery/Block";

interface Props {
  url: string;
}

export function LazyBlock({url}: Props){
  return (
  <LazyLoad once className="p-1 overflow-hidden transition-all md:w-1/2 w-100 lg:w-1/4 h-96 hover:drop-shadow-lg grayscale hover:grayscale-0 hover:p-0">
      <a href="#">
        <img src={url} alt="" className="object-cover w-full h-full md:object-cover" />
      </a>
  </LazyLoad>
  )
}