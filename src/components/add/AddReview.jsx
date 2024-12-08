import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddReview = () => {

    const {user} = useContext(AuthContext)

    const handleAddReview = e => {

      

        // const [user, setUser] = useState('')

        // useEffect(() =>{
        //     const loggedInUser= {name:'', email: ''}
        //     setUser(loggedInUser)
        // },[])

        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const game = form.game.value
        const genres = form.genres.value
        const rating = form.rating.value
        const description = form.description.value
        const image = form.image.value
        const publish = form.publish.value

        const addReview = { name, email, game, genres, rating, description, image, publish }
        console.log(addReview)

        fetch('http://localhost:5000/review', {
        method:'POST',
        headers:{
            'content-type' : 'application/json'
        },
        
        body:JSON.stringify(addReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Added review successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }

        })
        .catch(error => {
    console.error("catch error:", error);
});
    }

    return (
        <div className="bg-gradient-to-r from-orange-200 to-orange-400 p-24">
            <h2 className="text-3xl font-extrabold mb-4 text-center">Add Game Review</h2>
            <form onSubmit={handleAddReview}>
                {/* form row 1 */}
                {user? 
                <div className="md:flex mb-6">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">
                        <input readOnly value={user.displayName || 'No Name'} type="text" name="name" placeholder="name" className="input input-bordered w-full" />
                    </label>
                </div>

                <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <label className="input-group">
                        <input readOnly value={user.email} type="email" name="email" placeholder="email" className="input input-bordered w-full" />
                    </label>
                </div>


            </div>
                
                :   <p></p> }
                

                {/* form row 2 */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Game Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="game" placeholder="Game Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Genres</span>
                        </label>
                        <label className="input-group">
                            <input list="dropdown-options" id="options" name="genres" placeholder="genres" className="input input-bordered w-full" />
                            <datalist id="dropdown-options">
                                <option value="Action" />
                                <option value="Adventure" />
                                <option value="RPG" />
                                <option value="Farming" />
                            </datalist>

                        </label>
                    </div>


                </div>
                {/* form row 3 */}
                <div className="md:flex mb-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="rating" placeholder="rating" className="input input-bordered w-full" 
                            max="10" 
                            min="1"
                            onInput={(e) => {
                                if (e.target.value > 10) e.target.value = 10; 
                                if (e.target.value < 1) e.target.value = 1;    
                            }}
                            
                            />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="description" className="input input-bordered w-full" />
                        </label>
                    </div>


                </div>

                {/* form row 4 */}

                <div className="md:flex mb-6">
               
                <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="image url" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-0 md:ml-4 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Publishing Year</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="publish" placeholder="Publishing Year" className="input input-bordered w-full" />
                            
                        </label>
                    </div>


                </div>

                
                <input type="submit" value="Add Button" className="btn btn-block mt-6 " />
            </form>
        </div>
    );
};

export default AddReview;