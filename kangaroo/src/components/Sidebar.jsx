import React from 'react'
import { useState } from 'react'
import { Urls } from './Urls'
export const Sidebar = () => {
const[div,setdiv]=useState(false)
    function handleurl(){
setdiv(true)
    }
  return (
    <div className='main'>
    <div className='sidebar-main'>
        <div><img className='img1' src='https://static.thenounproject.com/png/1492419-200.png'></img></div>

        <details><summary>
        <div className='sidebar-1'>
            <img img className='img2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqBtaCYpBwYPL8vLVoi2sQ510Pmv9MqfII3g&usqp=CAU'></img>
            <p>Lorem Impsum</p>
        </div>

            </summary>
           
            
            </details>
       
        <div className='sidebar-2'>

        <details>
                <summary>
                <div className='sidebar-3'>
          
          <img className='img3' src='data:image/png;base64,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'></img>
          <p>Net</p>
      </div>
                </summary>
                <div className='subdiv-1'>
                <p>Domain</p>
                <p onClick={handleurl}>Url</p>
                <p>I2P</p>
                <p>Deep</p>
                <p>DeepUrl</p>
                <p>Hosting</p>
                <p>Browser</p>
                <p>Wifi</p>


            </div>

            </details>
       

       <details><summary>
       <div className='sidebar-4' >
            <img className='img4' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAAAqFBMVEX///8AAAAREiTa2tsJCQm6urrt7e1ZWVno6OgRERFcXFwqKiq4uLgODyKOjo4MDSEAABoAABcAABP19fWlpaWUlJp9fYUAAA9tbXSJiZEGCB4jIyN3d3c8PDw2NjYaGhqDg4PS0tJVVl4XGCmcnKAfHy1GRlIpKjgAAB91dH1AP0tkZG5MTFZUVF4vLy8WFhbIyMhmZmY0M0Cqq66bnaSNjZIsLjxnaG/cI/mQAAAEqklEQVR4nO3dCVebShyHYf9gNS6UpTJhJi4NSJDNG7Px/b/ZnWgavW1pc8IAI/f3plEjHpxHluQQkp6cIIQQQgghhBBCCCGEEEIIIYQQQgiht0wFfesb8WvLCSnoum/GL92qYGkI+6LGpR/sTjFMm21NkWsPu9JFphpGd5rIlMPorlfPPvUwTZZZCzA9ZG3A6L5X0lutwOi+/2XWDkwDWUsweu5b1hasd1lrMHo+GyiMJr0usxZhdNXnMmsTRpMeZa3C+pS1C+tR1jKMHkYDhdFDT8usdVhfsvZhdNHL2tgBjP7pQ9YFrJdl1gmMTruXdQMjMj8r7GY3v/nXmj4r7Lbrgf8tVTDqG/JzymA3f/9dnaYMRn09KKxJHaznQwE/pw5GD9O+MR9TCCN6mffNeU8pTPZwVVu3O07VsD8FGGCAAQYYYIABBhhggAEGGGCAAQZYS7DT71+O7PupzrCrBgesR1cawxod+ZzrC5s0m2nNy4DUjPjAatbEZjOtWRfVjPjAataaRs8JjfRdFZs98/qiMYxezLMjM+tcesCILo6sfo6awNQHGGCAAQYYYIABVtP9+ZE96w1rcJbejc6wRmcf1slUjfmgfj+Ei0avaftW8whf1ZgP6vdDGOyhgcEuscFuY43eUeW6bp7qRn1AdYOg+8sj0/x+rI0AAwwwwAADDDDA/mew8+noyKbnOsNemsxT52c0h/oc9GAPDQz2PA9q9HJLjc/MofsGL5E9u9cYRqdfjz377avWZ7+1EmCAAQYYYIABBhhggAEGGGCAAQYYYIABBhhggCnssjvXZacwsztYx2/uXHs+qOo6/18AzdvJaetNbjt/M26EEEIIIYQQQgghhBBCCCGEEEIIIV0zB1qnp3t12Ykx0AD7bO1gtrxau29Z+4lCGLb9fktOEu8TNe8NZmW2YSXR29eLaDfNDUNvk/2QRYWwknDxWWRvMKfKHXfteq7herSOhOc5wqOlLHgkj8gWRJsp0YLPRM8DPrTdEou5FzPmM2J+yvyN76ezVWEWRMFZuDanSWaaxTwzk6zbJSY3BPn7rNePwv5xa/the7Es+QOWYzsiMiIrsiO5pTj/hRneOqqC1E2Diog/rQ1K03CcTU0W+MmU8uU8o2RkOsLu0mUt8qyMHCPORCzEjJcLN3GNuJJrWCIvRhw5ecErxliasDRflX7FKn+3Tu1gTh7y0M8rNhMetx/HbsULMaYnk/nFNS2u5+NxMprG9h+G0UIu58WSrYvVTK5NBS9W8o/PylU6ToMgTZd8HaZUBTHPWcbLhI05sSpg7keYZS9ZzEWS+Hac50Fu+GHpPAZrufptzHSe+tcsm8/McbcwJ/BLlq3kqFPOktxnLOfrgvOYlzznfhlWaciTZRayNFynm6pgeZb73keYnEcsknW6vY5zqni82YjQZ64XFk9+7o3lKhlQmnW8yKLIyaJ4+89KxMxOrJkXL+J44c6cTCRRtIiTclaUcebNnI28LMpFttu77e+gHbk1us7rVV5cuVUawnMtwxGWJ7dIx7Pltzt2bXcS9nZv8br7sPe3tp/t7c5Dfi1sIazXm9vJYn+/O/RHHsMLsM/Wv4+qpvgTx13EAAAAAElFTkSuQmCC'></img>
            <p>File</p>
        </div>
        </summary>
        <div className='subdiv-1'>
                <p>Image</p>
                <p>Document</p>
                <p>Other File</p>
                


            </div>
        </details>
       

        <div className='sidebar-5' >
            <img className='img5' src='data:image/png;base64,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'></img>
            <p>Fileen</p>
        </div>

        <div className='sidebar-6' >
            <img className='img6' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbaZ53xBjCkwGGpyJEIwD5ApPFGaAvwTGGNg&usqp=CAU'></img>
            <p>Sms</p>
        </div>

        <div className='sidebar-7' >
            <img className='img7' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxV2l8A2gGVURecsXFLfjbZEjt5SyOwn2hvw&usqp=CAU'></img>
            <p>tag</p>
        </div>

        <div className='sidebar-8' >
            <img className='img8' src='data:image/png;base64,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'></img>
            <p>people</p>
        </div>
        </div>

    </div>
    {div?<Urls/>:""}
    </div>
  )
}