import { Book } from "./Book"

export const Books = ({books}) => {
  return(
    <ul>
      <Book description={books[0].description} />
      <Book description={books[1].description} />
      <Book description={books[2].description} />
    </ul>
  )
}