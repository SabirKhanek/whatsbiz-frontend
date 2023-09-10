# How to Implement utility classes into your module
   <button buttonSmall>Button Small</button>
    <button buttonRegular>Button Regular</button>
    <button buttonLarge>Button Large</button>
    <input type="text" inputSmall name="" id="" placeholder="input small">
    <input type="text" inputRegular name="" id="" placeholder="input Regular" >
    <input type="text" inputLarge name="" id="" placeholder="input Large" >
<!-- radion type input -->
  <label for="radio" radioRegular >
    <input type="radio"  class="" name="" id="radio" />
    Radio Label
  </label>
 <!-- select option input -->
  <label for="select" selectRegular>
    Select
    <select name="" id="select" selectRegularDropdown>
      <option value="">first option</option>
      <option value="">second option</option>
      <option value="">third option</option>
      <option value="">fourth option</option>
    </select>
  </label>



   <table>
    <tr tableHeader>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
    <tr tableCell>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr tableCell>
      <td>Centro comercial Moctezuma</td>
      <td>Francisco Chang</td>
      <td tableClickableCell>Mexico</td>
    </tr>
  </table>

  <div class="border-gray-400 border-b-2 p-0 m-0">
    <label for="tab1" 
       highlightedTab >Shields</label
    >
    <label for="tab2" tab
      >Biometrics</label
    >
    <label for="tab3" tab
      >Members</label
    >
  </div>
  
</div>

    you just need to add these directives into your button or input and the standard classes will automatically be implemented into you element. Note: you can still add your own classes into your element like giving it margin from left right top bottom. but other attributes like text-color, bg-color etc are not allowed to be implemented.
