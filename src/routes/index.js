import moviesRoutes from "./movies.js";

export default function routes(app){
    app.get('/',(req,res)=>{
        res.send("Home");
    });
    app.use('/movie',moviesRoutes);
    app.use('/categories',moviesRoutes);
}