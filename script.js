// document.addEventListener("DOMContentLoaded", () => {
//     let submitButton = document.querySelector('.create_portfolio');

//     if (submitButton) {
//         // Running on index.html
//         submitButton.addEventListener('click', function (e) {
//             e.preventDefault(); // Prevent form from refreshing

//             let first_name = document.querySelector('#first_name').value.trim();
//             let last_name = document.querySelector('#last_name').value.trim();

//             let edu1 = document.querySelector('#edu1_input').value.trim();
//             let deg1 = document.querySelector('#degree1_input').value.trim();
//             let grade1 = document.querySelector('#grade1_input').value.trim();
//             let dept1 = document.querySelector('#dept1_input').value.trim();
//             let year1 = document.querySelector('#year1').value.trim();

//             let edu2 = document.querySelector('#edu2_input').value.trim();
//             let stream2 = document.querySelector('#stream2').value.trim();
//             let grade2 = document.querySelector('#grade2_input').value.trim();
//             let board2 = document.querySelector('#board2').value.trim();
//             let year2 = document.querySelector('#year2').value.trim();

//             let edu3 = document.querySelector('#edu3_input').value.trim();
//             let grade3 = document.querySelector('#grade3_input').value.trim();
//             let board3 = document.querySelector('#board3').value.trim();
//             let year3 = document.querySelector('#year3').value.trim();

//             let proj1_title_elem = document.querySelector('#proj1_title');
//             let proj1_title = proj1_title_elem ? proj1_title_elem.value.trim() : '';

//             let proj1_link_elem = document.querySelector('#proj1_link');
//             let proj1_link = proj1_link_elem ? proj1_link_elem.value.trim() : '';

//             let proj1_desc_elem = document.querySelector('#proj1_desc');
//             let proj1_desc = proj1_desc_elem ? proj1_desc_elem.value.trim() : '';

//             let proj2_title_elem = document.querySelector('#proj2_title');
//             let proj2_title = proj2_title_elem ? proj2_title_elem.value.trim() : '';

//             let proj2_link_elem = document.querySelector('#proj2_link');
//             let proj2_link = proj2_link_elem ? proj2_link_elem.value.trim() : '';

//             let proj2_desc_elem = document.querySelector('#proj2_desc');
//             let proj2_desc = proj2_desc_elem ? proj2_desc_elem.value.trim() : '';


//             let email = document.querySelector('#email').value.trim();
//             let phone = document.querySelector('#phone').value.trim();

//             let website_elem = document.querySelector('#personal_website');
//             let website = website_elem ? website_elem.value.trim() : '';


            

//             if (
//                     first_name &&
//                     edu1 &&
//                     deg1 &&
//                     grade1 &&
//                     dept1 &&
//                     year1 &&
//                     edu2 &&
//                     stream2 &&
//                     grade2 &&
//                     board2 &&
//                     year2 &&
//                     edu3 &&
//                     grade3 &&
//                     board3 &&
//                     year3 &&
//                     email &&
//                     phone 
//                 ){
                
//                 localStorage.setItem('first_name_local', first_name); 
//                 localStorage.setItem('last_name_local', last_name);
//                 localStorage.setItem('edu1_local', edu1);
//                 localStorage.setItem('deg1_local', deg1);
//                 localStorage.setItem('grade1_local', grade1);
//                 localStorage.setItem('dept1_local', dept1);
//                 localStorage.setItem('year1_local', year1);

//                 localStorage.setItem('edu2_local', edu2);
//                 localStorage.setItem('stream2_local', stream2);
//                 localStorage.setItem('grade2_local', grade2);
//                 localStorage.setItem('board2_local', board2);
//                 localStorage.setItem('year2_local', year2);

//                 localStorage.setItem('edu3_local', edu3);  
//                 localStorage.setItem('grade3_local', grade3);
//                 localStorage.setItem('board3_local', board3);
//                 localStorage.setItem('year3_local', year3);

//                 localStorage.setItem('proj1_title_local', proj1_title);
//                 localStorage.setItem('proj1_link_local', proj1_link);
//                 localStorage.setItem('proj1_desc_local', proj1_desc);

//                 localStorage.setItem('proj2_title_local', proj2_title);
//                 localStorage.setItem('proj2_link_local', proj2_link);
//                 localStorage.setItem('proj2_desc_local', proj2_desc);

//                 localStorage.setItem('email_local', email);
//                 localStorage.setItem('phone_local', phone);
//                 localStorage.setItem('website_local', website);

//                 window.open('portfolio.html', '_blank');
//                 location.reload(true);


//             }
//             else{
//                 return;
//             }
//             // if (name) {
//             //     localStorage.setItem('user_name', name); // Store the name
//             //     window.open('portfolio.html', '_blank'); // Open new tab
//             // }
//             // else{
//             //     return;
//             // }
//         });
//     } else {
//         // Running on portfolio.html

//         //getting variables from local storage
//         let first_name_form = localStorage.getItem('first_name_local'); 
//         let last_name_form = localStorage.getItem('last_name_local');
//         let edu1_form = localStorage.getItem('edu1_local');
//         let deg1_form = localStorage.getItem('deg1_local');
//         let grade1_form = localStorage.getItem('grade1_local');
//         let dept1_form = localStorage.getItem('dept1_local');
//         let year1_form = localStorage.getItem('year1_local');

//         let edu2_form = localStorage.getItem('edu2_local');
//         let stream2_form = localStorage.getItem('stream2_local');
//         let grade2_form = localStorage.getItem('grade2_local');
//         let board2_form = localStorage.getItem('board2_local');
//         let year2_form = localStorage.getItem('year2_local');

//         let edu3_form = localStorage.getItem('edu3_local');
//         let grade3_form = localStorage.getItem('grade3_local');
//         let board3_form = localStorage.getItem('board3_local');
//         let year3_form = localStorage.getItem('year3_local');

//         let proj1_title_form = localStorage.getItem('proj1_title_local');
//         let proj1_link_form = localStorage.getItem('proj1_link_local');
//         let proj1_desc_form = localStorage.getItem('proj1_desc_local');

//         let proj2_title_form = localStorage.getItem('proj2_title_local');
//         let proj2_link_form = localStorage.getItem('proj2_link_local');
//         let proj2_desc_form = localStorage.getItem('proj2_desc_local');

//         let email_form = localStorage.getItem('email_local');
//         let phone_form = localStorage.getItem('phone_local');
//         let website_form = localStorage.getItem('website_local');

//         //declaring variables for the actual nodes present in the portfolio site

//         let first_name_p = document.querySelector('.first_name_p'); 
//         let last_name_p = document.querySelector('.last_name_p'); 
//         let edu1_p = document.querySelector('.edu1_p');
//         let degree1_p = document.querySelector('.degree1_p');
//         let dept1_p = document.querySelector('.dept1_p');
//         let grade1_p = document.querySelector('.grade1_p');
//         let year1_p = document.querySelector('.year1_p');

//         let edu2_p = document.querySelector('.edu2_p');
//         let stream2_p = document.querySelector('.stream2_p');
//         let year2_p = document.querySelector('.year2_p');
//         let grade2_p = document.querySelector('.grade2_p');
//         let board2_p = document.querySelector('.board2_p');

//         let year3_p = document.querySelector('.year3_p');
//         let grade3_p = document.querySelector('.grade3_p');
//         let board3_p = document.querySelector('.board3_p');
//         let edu3_p = document.querySelector('.edu3_p');

//         let proj1_desc = document.querySelector('.proj1_desc');
//         let proj1_link = document.querySelector('.proj1_link');
//         let proj1_name = document.querySelector('.proj1_name');

//         let proj2_name = document.querySelector('.proj2_name');
//         let proj2_link = document.querySelector('.proj2_link');
//         let proj2_desc = document.querySelector('.proj2_desc');

//         let email_p = document.querySelector('.email_p');
//         let phone_p = document.querySelector('.phone_p');
//         let website_p = document.querySelector('.website_p');
        

//         let nav = document.querySelector('nav');
//         let title = document.querySelector('title');
//         let proj_legend = document.querySelector('.proj_legend');


//         if (
//                 first_name_form &&
//                 edu1_form &&
//                 deg1_form &&
//                 grade1_form &&
//                 dept1_form &&
//                 year1_form &&
//                 edu2_form &&
//                 stream2_form &&
//                 grade2_form &&
//                 board2_form &&
//                 year2_form &&
//                 edu3_form &&
//                 grade3_form &&
//                 board3_form &&
//                 year3_form &&
//                 email_form &&
//                 phone_form
//             )
//             {

//                 nav.textContent=`${first_name_form}'s Portfolio`;
//                 first_name_p.textContent=first_name_form;
//                 title.textContent=`${first_name_form}'s Portfolio`;
                
//                 // if(first_name_form.length>6){
//                 //     first_name_p.style.margin="6vh";
//                 // } 
                
                
//                 last_name_p.textContent=last_name_form;
                

//                 edu1_p.textContent=`Institute: ${edu1_form}`;
//                 degree1_p.textContent=`${deg1_form}`;
//                 grade1_p.textContent=`CGPA: ${grade1_form}`;
//                 dept1_p.textContent=`in ${dept1_form}`;
//                 year1_p.textContent=`Year: ${year1_form}`;

//                 edu2_p.textContent=`Institute: ${edu2_form}`;
//                 stream2_p.textContent=`Stream: ${stream2_form}`;
//                 year2_p.textContent=`Year: ${year2_form}`;
//                 grade2_p.textContent=`${grade2_form} %`;
//                 board2_p.textContent=`Board: ${board2_form}`;
                
//                 edu3_p.textContent=`Institute: ${edu3_form}`;
//                 year3_p.textContent=`Year: ${year3_form}`;
//                 grade3_p.textContent=`${grade3_form} %`;
//                 board3_p.textContent=`Board: ${board3_form}`;


//                 if((proj1_name && proj1_title_form)||
//                 (proj1_link && proj1_link_form)||
//                 (proj1_desc && proj1_desc_form)||
//                 (proj2_name && proj2_title_form)||
//                 (proj2_link && proj2_link_form)||
//                 (proj2_desc && proj2_desc_form)
//                 ) proj_legend.textContent="Project Works";


//                 if (proj1_name && proj1_title_form) proj1_name.textContent = proj1_title_form;
//                 if (proj1_link && proj1_link_form) proj1_link.innerHTML = "<a href =" + proj1_link_form +">" + "Link to "+ `${proj1_title_form}`+"</a>" ;
//                 if (proj1_desc && proj1_desc_form) proj1_desc.textContent = proj1_desc_form;

//                 // Inject project 2 info
//                 if (proj2_name && proj2_title_form) proj2_name.textContent = proj2_title_form;
//                 if (proj2_link && proj2_link_form) proj2_link.innerHTML = "<a href =" + proj2_link_form +">" + "Link to "+ `${proj2_title_form}`+"</a>" ;
//                 if (proj2_desc && proj2_desc_form) proj2_desc.textContent = proj2_desc_form;

//                 // Inject contact info
//                  email_p.textContent = email_form;
//                  phone_p.textContent = phone_form;
//                 if (website_p && website_form) website_p.textContent = website_form;



//             }





//     }
// });





document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('main-form');

    // If on index.html (form page)
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevents form POST

            let first_name = document.querySelector('#first_name').value.trim();
            let last_name = document.querySelector('#last_name').value.trim();

            let edu1 = document.querySelector('#edu1_input').value.trim();
            let deg1 = document.querySelector('#degree1_input').value.trim();
            let grade1 = document.querySelector('#grade1_input').value.trim();
            let dept1 = document.querySelector('#dept1_input').value.trim();
            let year1 = document.querySelector('#year1').value.trim();

            let edu2 = document.querySelector('#edu2_input').value.trim();
            let stream2 = document.querySelector('#stream2').value.trim();
            let grade2 = document.querySelector('#grade2_input').value.trim();
            let board2 = document.querySelector('#board2').value.trim();
            let year2 = document.querySelector('#year2').value.trim();

            let edu3 = document.querySelector('#edu3_input').value.trim();
            let grade3 = document.querySelector('#grade3_input').value.trim();
            let board3 = document.querySelector('#board3').value.trim();
            let year3 = document.querySelector('#year3').value.trim();

            let proj1_title = document.querySelector('#proj1_title')?.value.trim() || '';
            let proj1_link = document.querySelector('#proj1_link')?.value.trim() || '';
            let proj1_desc = document.querySelector('#proj1_desc')?.value.trim() || '';

            let proj2_title = document.querySelector('#proj2_title')?.value.trim() || '';
            let proj2_link = document.querySelector('#proj2_link')?.value.trim() || '';
            let proj2_desc = document.querySelector('#proj2_desc')?.value.trim() || '';

            let email = document.querySelector('#email').value.trim();
            let phone = document.querySelector('#phone').value.trim();
            let website = document.querySelector('#personal_website')?.value.trim() || '';

            if (
                first_name && edu1 && deg1 && grade1 && dept1 && year1 &&
                edu2 && stream2 && grade2 && board2 && year2 &&
                edu3 && grade3 && board3 && year3 && email && phone
            ) {
                localStorage.setItem('first_name_local', first_name); 
                localStorage.setItem('last_name_local', last_name);
                localStorage.setItem('edu1_local', edu1);
                localStorage.setItem('deg1_local', deg1);
                localStorage.setItem('grade1_local', grade1);
                localStorage.setItem('dept1_local', dept1);
                localStorage.setItem('year1_local', year1);

                localStorage.setItem('edu2_local', edu2);
                localStorage.setItem('stream2_local', stream2);
                localStorage.setItem('grade2_local', grade2);
                localStorage.setItem('board2_local', board2);
                localStorage.setItem('year2_local', year2);

                localStorage.setItem('edu3_local', edu3);  
                localStorage.setItem('grade3_local', grade3);
                localStorage.setItem('board3_local', board3);
                localStorage.setItem('year3_local', year3);

                localStorage.setItem('proj1_title_local', proj1_title);
                localStorage.setItem('proj1_link_local', proj1_link);
                localStorage.setItem('proj1_desc_local', proj1_desc);

                localStorage.setItem('proj2_title_local', proj2_title);
                localStorage.setItem('proj2_link_local', proj2_link);
                localStorage.setItem('proj2_desc_local', proj2_desc);

                localStorage.setItem('email_local', email);
                localStorage.setItem('phone_local', phone);
                localStorage.setItem('website_local', website);

                // Redirect to portfolio.html in the same tab
                window.location.href = 'portfolio.html';
            } else {
                alert("Please fill all required fields.");
                return;
            }
        });
    } else {
        // Running on portfolio.html

        //getting variables from local storage
        let first_name_form = localStorage.getItem('first_name_local'); 
        let last_name_form = localStorage.getItem('last_name_local');
        let edu1_form = localStorage.getItem('edu1_local');
        let deg1_form = localStorage.getItem('deg1_local');
        let grade1_form = localStorage.getItem('grade1_local');
        let dept1_form = localStorage.getItem('dept1_local');
        let year1_form = localStorage.getItem('year1_local');

        let edu2_form = localStorage.getItem('edu2_local');
        let stream2_form = localStorage.getItem('stream2_local');
        let grade2_form = localStorage.getItem('grade2_local');
        let board2_form = localStorage.getItem('board2_local');
        let year2_form = localStorage.getItem('year2_local');

        let edu3_form = localStorage.getItem('edu3_local');
        let grade3_form = localStorage.getItem('grade3_local');
        let board3_form = localStorage.getItem('board3_local');
        let year3_form = localStorage.getItem('year3_local');

        let proj1_title_form = localStorage.getItem('proj1_title_local');
        let proj1_link_form = localStorage.getItem('proj1_link_local');
        let proj1_desc_form = localStorage.getItem('proj1_desc_local');

        let proj2_title_form = localStorage.getItem('proj2_title_local');
        let proj2_link_form = localStorage.getItem('proj2_link_local');
        let proj2_desc_form = localStorage.getItem('proj2_desc_local');

        let email_form = localStorage.getItem('email_local');
        let phone_form = localStorage.getItem('phone_local');
        let website_form = localStorage.getItem('website_local');

        //declaring variables for the actual nodes present in the portfolio site

        let first_name_p = document.querySelector('.first_name_p'); 
        let last_name_p = document.querySelector('.last_name_p'); 
        let edu1_p = document.querySelector('.edu1_p');
        let degree1_p = document.querySelector('.degree1_p');
        let dept1_p = document.querySelector('.dept1_p');
        let grade1_p = document.querySelector('.grade1_p');
        let year1_p = document.querySelector('.year1_p');

        let edu2_p = document.querySelector('.edu2_p');
        let stream2_p = document.querySelector('.stream2_p');
        let year2_p = document.querySelector('.year2_p');
        let grade2_p = document.querySelector('.grade2_p');
        let board2_p = document.querySelector('.board2_p');

        let year3_p = document.querySelector('.year3_p');
        let grade3_p = document.querySelector('.grade3_p');
        let board3_p = document.querySelector('.board3_p');
        let edu3_p = document.querySelector('.edu3_p');

        let proj1_desc = document.querySelector('.proj1_desc');
        let proj1_link = document.querySelector('.proj1_link');
        let proj1_name = document.querySelector('.proj1_name');

        let proj2_name = document.querySelector('.proj2_name');
        let proj2_link = document.querySelector('.proj2_link');
        let proj2_desc = document.querySelector('.proj2_desc');

        let email_p = document.querySelector('.email_p');
        let phone_p = document.querySelector('.phone_p');
        let website_p = document.querySelector('.website_p');
        

        let nav = document.querySelector('nav');
        let title = document.querySelector('title');
        let proj_legend = document.querySelector('.proj_legend');


        if (
                first_name_form &&
                edu1_form &&
                deg1_form &&
                grade1_form &&
                dept1_form &&
                year1_form &&
                edu2_form &&
                stream2_form &&
                grade2_form &&
                board2_form &&
                year2_form &&
                edu3_form &&
                grade3_form &&
                board3_form &&
                year3_form &&
                email_form &&
                phone_form
            )
            {

                nav.textContent=`${first_name_form}'s Portfolio`;
                first_name_p.textContent=first_name_form;
                title.textContent=`${first_name_form}'s Portfolio`;
                last_name_p.textContent=last_name_form;

                edu1_p.textContent=`Institute: ${edu1_form}`;
                degree1_p.textContent=`${deg1_form}`;
                grade1_p.textContent=`CGPA: ${grade1_form}`;
                dept1_p.textContent=`in ${dept1_form}`;
                year1_p.textContent=`Year: ${year1_form}`;

                edu2_p.textContent=`Institute: ${edu2_form}`;
                stream2_p.textContent=`Stream: ${stream2_form}`;
                year2_p.textContent=`Year: ${year2_form}`;
                grade2_p.textContent=`${grade2_form} %`;
                board2_p.textContent=`Board: ${board2_form}`;
                
                edu3_p.textContent=`Institute: ${edu3_form}`;
                year3_p.textContent=`Year: ${year3_form}`;
                grade3_p.textContent=`${grade3_form} %`;
                board3_p.textContent=`Board: ${board3_form}`;

                if((proj1_name && proj1_title_form)||
                (proj1_link && proj1_link_form)||
                (proj1_desc && proj1_desc_form)||
                (proj2_name && proj2_title_form)||
                (proj2_link && proj2_link_form)||
                (proj2_desc && proj2_desc_form)
                ) proj_legend.textContent="Project Works";

                if (proj1_name && proj1_title_form) proj1_name.textContent = proj1_title_form;
                if (proj1_link && proj1_link_form) proj1_link.innerHTML = "<a href =" + proj1_link_form +">" + "Link to "+ `${proj1_title_form}`+"</a>" ;
                if (proj1_desc && proj1_desc_form) proj1_desc.textContent = proj1_desc_form;

                if (proj2_name && proj2_title_form) proj2_name.textContent = proj2_title_form;
                if (proj2_link && proj2_link_form) proj2_link.innerHTML = "<a href =" + proj2_link_form +">" + "Link to "+ `${proj2_title_form}`+"</a>" ;
                if (proj2_desc && proj2_desc_form) proj2_desc.textContent = proj2_desc_form;

                email_p.textContent = email_form;
                phone_p.textContent = phone_form;
                if (website_p && website_form) website_p.textContent = website_form;
            }
    }
});
