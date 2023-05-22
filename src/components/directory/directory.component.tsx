import CategoryItem from '../category-item/category-item.component'
const Directory = ({categories}:{categories:Array<any>}) => {
  return (

  <div className="categories-container">
     {categories.map((category: {id:number; imageUrl:string; title:string;}) => (
       <CategoryItem key={category.id} category={category} />
     ))}
   </div>
  )
}

export default Directory;
