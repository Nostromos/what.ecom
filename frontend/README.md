# what.ecom Frontend

## Summary
This is pretty basic React frontend with a few embellishments for novelty or practice.

### Style & Aesthetics
*sigh* I'm not sure how I'd describe this but I'm trying to make something pretty ~enough~. After I've got the skeleton up, I'll take another pass at aesthetics.

### State
I plan on using vanilla react for some stateful stuff, and Redux for the majority of everything else. There are a lot of choices for working with state but I'm trying to stick to what I was taught and learn those tools and techniques before I branch out.

### UI & Components
There are also many useful and interesting component libraries out there but again, this is mean to be polished practice so I'll stick to what I've learned. 

### Structure
Keeping it simple: assets, components, elements, utils, and perhaps pages or routes folders in the future. 

Assets are going to be anything unrelated to products so things like logos, splashes, category pictures, icons, etc. Product information (including assets) will be kept in a postgres datastore and I'll probably stick product images in S3 or something like that. 

Elements and Components are basically the same - the difference being size. I'm thinking of components as the building blocks of pages, rarely added to other components. Elements will appear in one or many components but not vice versa. 

Utils are for useful functions.

Every element and component is contained in a folder with 3 files: the jsx component, a css file for styling, and a file for unit testing. This may change and expand as the project grows. 

### Routing
I intend to use React Router for this project. As with state, the community has built a lot of solutions, many of them better than react router but I'm sticking with what I know and have used before. 