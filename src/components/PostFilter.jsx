import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput 
                placeholder="Search ..."
                value={filter.search}
                onChange={(event) => setFilter({...filter, search: event.target.value})}
            />
            <MySelect 
                value={filter.sort}
                onChange={(selected) => setFilter({...filter, sort: selected})}
                defaultName="Sort posts..."
                options={[
                    {value: "title", name: "by name"},
                    {value: "body", name: "by text"}
                ]}
            />
        </div>
    )
}

export default PostFilter;