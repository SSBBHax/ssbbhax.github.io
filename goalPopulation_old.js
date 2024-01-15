const goalImageMapping = {
	'3 Frog Rings': ['images/goals/3_frog_rings.png'],
	'5 Candy Bags': ['images/goals/5_candy_bags.png'],
	'5 Empty Cans': ['images/goals/5_empty_cans.png'],
	'6 Frog Rings': ['images/goals/6_frog_rings.png'],
	'7 Cookie Boxes': ['images/goals/7_cookie_boxes.png'],
	'9 Frog Rings': ['images/goals/9_frog_rings.png'],
	'10 Unique Trash': ['images/goals/10_unique_trash.png'],
	'400 Happy Points': ['images/goals/400_happy_points.png'],
	'500 Scrap': ['images/goals/500_scrap.png'],
	'700 Happy Points': ['images/goals/700_happy_points.png'],
	'1000 Scrap': ['images/goals/1000_scrap.png'],
	'4000 Moolah': ['images/goals/4000_moolah.png'],
	'6000 Moolah': ['images/goals/6000_moolah.png'],
	'All Chips': ['images/prereqs/buy_chibi-blaster.png','images/prereqs/buy_charge_chip.png','images/goals/all_chips.png'],
	'All Doors Backyard': ['images/goals/all_doors_backyard.png'],
	'All Doors Basement': ['images/goals/all_doors_basement.png'],
	'All Doors Bedroom': ['images/goals/all_doors_bedroom.png'],
	'All Doors Foyer': ['images/goals/all_doors_foyer.png'],
	'All Doors Jenny\u2019s Room': ['images/goals/all_doors_jennys_room.png'],
	'All Doors Kitchen': ['images/goals/all_doors_kitchen.png'],
	'All Doors Living Room': ['images/goals/all_doors_living_room.png'],
	'All Suits (Minus Tao and Super Chibi Robo)': ['images/prereqs/ghost_suit.png','images/goals/all_suits.png'],
	'All Tools': ['images/prereqs/buy_chibi-blaster.png','images/goals/all_tools.png'],
	'Backyard Frog Ring': ['images/goals/backyard_frog_ring.png'],
	'Bandage Delivery': ['images/goals/deliver_bandages.png'],
	'Buy Chibi Battery': ['images/goals/buy_chibi-battery.png'],
	'Buy Hot Rod': ['images/goals/buy_hot_rod.png'],
	'Buy Space Scrambler': ['images/goals/buy_space_scrambler.png'],
	'Cooking Sticker': ['images/goals/cooking_sticker.png'],
	'Deliver the Red Shoe': ['images/prereqs/red_shoe.png','images/goals/deliver_red_shoe.png'],
	'Divorce': ['images/goals/divorce.png'],
	'Dog Tags': ['images/goals/dog_tags.png'],
	'Drain Frog Ring': ['images/goals/drain_frog_ring.png'],
	'Fill Crayon Box': ['images/goals/fill_crayon_box.png'],
	'Free Funky Phil': ['images/goals/free_funky_phil.png', 'images/prereqs/dinahs_teeth.png'],
	'Frog Sticker': ['images/goals/reunite_the_frogs.png'],
	'Frog Suit': ['images/goals/frog_suit.png'],
	'Give a Flower to Mom': ['images/goals/give_flower_to_mom.png', 'images/prereqs/plant_a_flower_seed.png'],
	'Green Brick': ['images/goals/green_brick.png'],
	'Gunpowder': ['images/goals/gunpowder.png'],
	'Mr Prongs Sticker': ['images/goals/mr_prongs_sticker.png'],
	'Mug': ['images/goals/obtain_mug.png'],
	'Obtain Photo': ['images/goals/photo.png'],
	'Obtain Pirate Ship': ['images/goals/pirate_ship.png'],
	'Obtain Radar': ['images/goals/buy_chibi-radar.png'],
	'Obtain Spoon': ['images/goals/obtain_spoon.png'],
	'Obtain Squirter': ['images/goals/obtain_squirter.png'],
	'Open Bedroom Shortcut': ['images/prereqs/buy_chibi-blaster.png','images/goals/open_bedroom_shortcut.png'],
	'Pajamas': ['images/goals/pajamas.png'],
	'Range Chip': ['images/prereqs/buy_chibi-blaster.png','images/goals/buy_range_chip.png'],
	'Red Brick': ['images/goals/red_brick.png'],
	'Shoot 6 Sunshine Stickers': ['images/prereqs/buy_chibi-blaster.png','images/goals/shoot_6_sunshine_stickers.png'],
	'Snorkels': ['images/goals/snorkle_and_goggles.png'],
	'Spook Sophie': ['images/prereqs/ghost_suit.png','images/goals/spook_sophie.png'],
	'Squirt Honey/Nectar on Sunshine': ['images/goals/squirt_honey_nectar_on_sunshine.png'],
	'Ticket Stub Delivery': ['images/goals/deliver_ticket_stub.png'],
	'Utilibots Sticker': ['images/goals/utilibots_sticker.png'],
	'Wake up the Bird': ['images/goals/wake_up_bird.png'],
	'Waterfall Frog Ring': ['images/goals/waterfall_frog_ring.png'],
	'White Brick': ['images/goals/white_brick.png']};

// Function to handle displaying images over the flowchart
function displayImages() {
	const goalsText = document.getElementById('goalsTextbox').value;
	const goals = goalsText.split(/ - |\n/).map(goal => goal.trim());

	goals.forEach(goal => {
		const imagePaths = goalImageMapping[goal];
		if (imagePaths) {
			imagePaths.forEach(imagePath => {
				const img = new Image();
				img.src = imagePath;
				img.style.position = 'absolute'; // Position the images over the flowchart cells

				// Hardcoded positions for the images (adjust these according to your layout)
				switch (goal) {
				case '3 Frog Rings':
					img.style.top = '100px';
					img.style.left = '650px';
					break;
				case '5 Candy Bags':
					img.style.top = '726px';
					img.style.left = '1663px';
					break;
				case '5 Empty Cans':
					img.style.top = '587px';
					img.style.left = '1663px';
					break;
				case '6 Frog Rings':
					img.style.top = '100px';
					img.style.left = '819px';
					break;
				case '7 Cookie Boxes':
					img.style.top = '656px';
					img.style.left = '1663px';
					break;
				case '9 Frog Rings':
					img.style.top = '100px';
					img.style.left = '988px';
					break;
				case '10 Unique Trash':
					img.style.top = '656px';
					img.style.left = '1494px';
					break;
				case '400 Happy Points':
					img.style.top = '726px';
					img.style.left = '650px';
					break;
				case '500 Scrap':
					img.style.top = '656px';
					img.style.left = '650px';
					break;
				case '700 Happy Points':
					img.style.top = '726px';
					img.style.left = '819px';
					break;
				case '1000 Scrap':
					img.style.top = '656px';
					img.style.left = '819px';
					break;
				case '4000 Moolah':
					img.style.top = '170px';
					img.style.left = '1325px';
					break;
				case '6000 Moolah':
					img.style.top = '100px';
					img.style.left = '1325px';
					break;
				case 'All Chips':
					if (imagePath === 'images/goals/all_chips.png') {
						img.style.top = '517px';
						img.style.left = '481px';
					} else if (imagePath === 'images/prereqs/buy_chibi-blaster.png') {
						img.style.top = '378px';
						img.style.left = '481px';
					} else if (imagePath === 'images/prereqs/buy_charge_chip.png') {
						img.style.top = '448px';
						img.style.left = '481px';
					}
					break;
				case 'All Doors Backyard':
					img.style.top = '239px';
					img.style.left = '1494px';
					break;
				case 'All Doors Basement':
					img.style.top = '378px';
					img.style.left = '1494px';
					break;
				case 'All Doors Bedroom':
					img.style.top = '309px';
					img.style.left = '1156px';
					break;
				case 'All Doors Foyer':
					img.style.top = '239px';
					img.style.left = '1156px';
					break;
				case 'All Doors Jenny\u2019s Room':
					img.style.top = '448px';
					img.style.left = '1325px';
					break;
				case 'All Doors Kitchen':
					img.style.top = '378px';
					img.style.left = '1156px';
					break;
				case 'All Doors Living Room':
					img.style.top = '309px';
					img.style.left = '1494px';
					break;
				case 'All Suits (Minus Tao and Super Chibi Robo)':
					if (imagePath === 'images/goals/all_suits.png') {
						img.style.top = '239px';
						img.style.left = '312px';
					} else if (imagePath === 'images/prereqs/ghost_suit.png') {
						img.style.top = '309px';
						img.style.left = '143px';
					}
					break;
				case 'All Tools':
					if (imagePath === 'images/goals/all_tools.png') {
						img.style.top = '239px';
						img.style.left = '481px';
					} else if (imagePath === 'images/prereqs/buy_chibi-blaster.png') {
						img.style.top = '378px';
						img.style.left = '481px';
					}
					break
				case 'Backyard Frog Ring':
					img.style.top = '100px';
					img.style.left = '1663px';
					break;
				case 'Bandage Delivery':
					img.style.top = '448px';
					img.style.left = '1156px';
					break;
				case 'Buy Chibi Battery':
					img.style.top = '517px';
					img.style.left = '650px';
					break;
				case 'Buy Hot Rod':
					img.style.top = '100px';
					img.style.left = '1494px';
					break;
				case 'Buy Space Scrambler':
					img.style.top = '100px';
					img.style.left = '1156px';
					break;
				case 'Cooking Sticker':
					img.style.top = '448px';
					img.style.left = '143px';
					break;
				case 'Deliver the Red Shoe':
					if (imagePath === 'images/goals/deliver_red_shoe.png') {
						img.style.top = '587px';
						img.style.left = '1156px';
					} else if (imagePath === 'images/prereqs/red_shoe.png') {
						img.style.top = '517px';
						img.style.left = '1156px';
					}
					break;
				case 'Divorce':
					img.style.top = '378px';
					img.style.left = '143px';
					break;
				case 'Drain Frog Ring':
					img.style.top = '170px';
					img.style.left = '650px';
					break;
				case 'Dog Tags':
					img.style.top = '239px';
					img.style.left = '988px';
					break;
				case 'Fill Crayon Box':
						img.style.top = '448px';
						img.style.left = '1494px';
						break;
				case 'Free Funky Phil':
					if (imagePath === 'images/goals/free_funky_phil.png') {
						img.style.top = '239px';
						img.style.left = '143px';
					} else if (imagePath === 'images/prereqs/dinahs_teeth.png') {
						img.style.top = '170px';
						img.style.left = '143px';
					}
					break;
				case 'Frog Suit':
						img.style.top = '170px';
						img.style.left = '312px';
						break;
				case 'Give a Flower to Mom':
					if (imagePath === 'images/goals/give_flower_to_mom.png') {
						img.style.top = '448px';
						img.style.left = '819px';
					} else if (imagePath === 'images/prereqs/plant_a_flower_seed.png') {
						img.style.top = '378px';
						img.style.left = '819px';
					}
					break;
				case 'Green Brick':
						img.style.top = '517px';
						img.style.left = '1325px';
						break;
				case 'Gunpowder':
						img.style.top = '378px';
						img.style.left = '1663px';
						break;
				case 'Mr Prongs Sticker':
						img.style.top = '239px';
						img.style.left = '819px';
						break;
				case 'Mug':
						img.style.top = '239px';
						img.style.left = '650px';
						break;
				case 'Obtain Photo':
						img.style.top = '170px';
						img.style.left = '1494px';
						break;
				case 'Obtain Pirate Ship':
						img.style.top = '309px';
						img.style.left = '819px';
						break;
				case 'Obtain Radar':
						img.style.top = '378px';
						img.style.left = '312px';
						break;
				case 'Obtain Spoon':
						img.style.top = '309px';
						img.style.left = '650px';
						break;
				case 'Obtain Squirter':
						img.style.top = '170px';
						img.style.left = '481px';
						break;
				case 'Open Bedroom Shortcut':
					if (imagePath === 'images/goals/open_bedroom_shortcut.png') {
						img.style.top = '378px';
						img.style.left = '650px';
					} else if (imagePath === 'images/prereqs/buy_chibi-blaster.png') {
						img.style.top = '378px';
						img.style.left = '481px';
					}
					break;
				case 'Pajamas':
						img.style.top = '309px';
						img.style.left = '312px';
						break;
				case 'Range Chip':
					if (imagePath === 'images/goals/buy_range_chip.png') {
						img.style.top = '517px';
						img.style.left = '312px';
					} else if (imagePath === 'images/prereqs/buy_chibi-blaster.png') {
						img.style.top = '378px';
						img.style.left = '481px';
					}
					break;
				case 'Red Brick':
						img.style.top = '170px';
						img.style.left = '1156px';
						break;
				case 'Frog Sticker':
						img.style.top = '100px';
						img.style.left = '143px';
						break;
				case 'Shoot 6 Sunshine Stickers':
					if (imagePath === 'images/goals/shoot_6_sunshine_stickers.png') {
						img.style.top = '448px';
						img.style.left = '650px';
					} else if (imagePath === 'images/prereqs/buy_chibi-blaster.png') {
						img.style.top = '378px';
						img.style.left = '481px';
					}
					break;
				case 'Snorkels':
						img.style.top = '517px';
						img.style.left = '1494px';
						break;
				case 'Squirt Honey/Nectar on Sunshine':
						img.style.top = '31px';
						img.style.left = '312px';
						break;
				case 'Ticket Stub Delivery':
						img.style.top = '378px';
						img.style.left = '988px';
						break;
				case 'Utilibots Sticker':
						img.style.top = '656px';
						img.style.left = '988px';
						break;
				case 'Wake up the Bird':
					img.style.top = '100px';
					img.style.left = '312px';
					break;
				case 'Waterfall Frog Ring':
					img.style.top = '170px';
					img.style.left = '988px';
					break;
				case 'White Brick':
					img.style.top = '239px';
					img.style.left = '1663px';
					break;
				}

				document.getElementById('flowchartImage').parentElement.appendChild(img);
			});
		}
	});
}

// Function to clear displayed images
function clearImages() {
  const parentElement = document.getElementById('flowchartImage').parentElement;
  const images = parentElement.querySelectorAll('img:not(#flowchartImage)');
  
  images.forEach(image => {
    parentElement.removeChild(image);
  });
}

// Event listener for the submit button
document.getElementById('submitButton').addEventListener('click', displayImages);

// Event listener for the additional Submit button to clear images
document.getElementById('unsubmitButton').addEventListener('click', clearImages);