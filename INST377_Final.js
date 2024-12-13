/* import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rrwizhzlnsheqbkmpqxu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyd2l6aHpsbnNoZXFia21wcXh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5NDU3MzQsImV4cCI6MjA0OTUyMTczNH0.lKP9EWRP_83lfZ21mTeTfThjVjBeP279coXNEt6JWSo'
const supabase = createClient(supabaseUrl, supabaseKey)

*/

const supabaseUrl = 'https://rrwizhzlnsheqbkmpqxu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyd2l6aHpsbnNoZXFia21wcXh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5NDU3MzQsImV4cCI6MjA0OTUyMTczNH0.lKP9EWRP_83lfZ21mTeTfThjVjBeP279coXNEt6JWSo'
const supabase1 = supabase.createClient(supabaseUrl, supabaseKey)

async function populateCheckboxList() {
    try {
      const { data, error } = await supabase1
        .from('dietary_restrictions')
        .select('id,restriction_name');
  
      if (error) {
        console.error('Error fetching data:', error);
        return;
      }
  
      const checkboxContainer = document.getElementById('checkbox_list');
  
      checkboxContainer.innerHTML = '';

      data.forEach(item => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `checkbox-${item.id}`;
        checkbox.value = item.restriction_name;
  
        const label = document.createElement('label');
        label.htmlFor = `checkbox-${item.id}`;
        label.textContent = item.restriction_name;
  
        const div = document.createElement('div');
        div.appendChild(checkbox);
        div.appendChild(label);
        checkboxContainer.appendChild(div);
      });
    } catch (err) {
      console.error('Error:', err);
    }
}

async function addCustomer(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();

    const checkboxList = document.getElementById('checkbox_list');
    
    const dietaryPreferences = Array.from(
        checkboxList.querySelectorAll('input[type="checkbox"]:checked')
    ).map((checkbox) => checkbox.value);

    try {
        const { data: existingUsers, error: fetchError } = await supabase1
        .from('CustomerInfo')
        .select('*')
        .eq('first_name', firstName)
        .eq('last_name', lastName);

        if (existingUsers.length > 0) {
            alert('This user already exists in the database, try the find ID section');
            return;
        }

        const { data: insertedUser, error: insertError } = await supabase1.from('CustomerInfo').insert([
            {
                first_name: firstName,
                last_name: lastName,
                dietary_restrictions: dietaryPreferences,
            },
        ])
        .select();
        alert("User Added Successfully.")

        const userID = insertedUser[0].id;
        const idDisplayDiv = document.getElementById('idDisplay');
        const generatedID = document.getElementById('generatedID');
        generatedID.textContent = userID;
        idDisplayDiv.style.display = 'block';
    } catch (error) {
        console.error(error)
    }
}

async function findID(event) {
    event.preventDefault();

    const findFN = document.getElementById('findfirstName').value.trim();
    const findLN = document.getElementById('findlastName').value.trim();

    const { data: user } = await supabase1
    .from('CustomerInfo')
    .select('id')
    .eq('first_name', findFN)
    .eq('last_name' , findLN)
    .single();

    if (user) {
        const idDisplayDivFound = document.getElementById('findidDisplay');
        const foundID = document.getElementById('foundID');
        foundID.textContent = user.id;
        idDisplayDivFound.style.display = 'block'
    } else {
        alert('No user found with that name');
    }
}

async function deleteUser(event) {
    event.preventDefault();

    const delFN = document.getElementById('delfirstName').value.trim();
    const delLN = document.getElementById('dellastName').value.trim();

    const { data: userDel} = await supabase1
            .from('CustomerInfo')
            .select('id')
            .eq('first_name', delFN)
            .eq('last_name', delLN)
            .single();

    if (!userDel) {
        alert('No user found with that name.');
        return;
    }

    const { } = await supabase1
    .from('CustomerInfo')
    .delete()
    .eq('id', userDel.id);

    alert('User Successfully Deleted!')
}

async function searchFood(event) {
    event.preventDefault();

    const query = document.getElementById('foodSearch').value.trim();
    const resultsDiv = document.getElementById('searchResults');
    resultsDiv.innerHTML = '';

    const response = await fetch(`https://world.openfoodfacts.net/cgi/search.pl?search_terms=${encodeURIComponent(query)}&page_size=10&json=true`);
    const data = await response.json();

    const productList = data.products.map(product => {
        const productName = product.product_name || 'No name available';
        return `<li>${productName}</li>`;
    }).join('');

    resultsDiv.innerHTML = `<ul>${productList}</ul>`;
}

document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname;

    if (currentPage.includes("Home_Page")) {
        const form = document.forms['findID'];
        form.addEventListener('submit', findID);
    }

    if (currentPage.includes("Home_Page")) {
        const deleteForm = document.forms['delID'];
        deleteForm.addEventListener('submit', deleteUser);
    }

    if (currentPage.includes("Recipie_Finder")) {
        const searchForm = document.forms['findFoodForm'];
        searchForm.addEventListener('submit', searchFood);
    }
});


window.addEventListener('DOMContentLoaded', populateCheckboxList);
