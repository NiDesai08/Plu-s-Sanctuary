# Plu-s-Sanctuary
An Interactive Story for Knight Hacks IX

## Inspiration
Plu's sanctuary was greatly inspired from this year's Knight Hacks theme as well as from my personal love for immersive, interactive graphic novels/experiences like _The Boat_ by SBS. I wanted to try blending traditional, cozy children's book storytelling with responsive web animations where the user's direct actions could help a little creature find comfort in it's disrupted environment.

## What it does
Plu's Sanctuary is a digital, point-and-click storybook that follows a little plush plant creature named Plu as it navigates through a corrupted forest. The experience is broken down page-by-page like a real book:
- **Panel 1 (Intro):** Welcomes the reader into a mysterious forest with a mouse-parallax effect a glowing hover response on the hand-drawn title logo.
- **Panel 2 (The River):** Requires the player to tap on themed stepping surfaces to help Plu hop safely across a wide roaring river. Landing on the final surface reveals an encouraging previously hidden message.
- **Panel 3 (The Vines/Fork):** Vines block Plu's path, the user must click along the individual angled vine lines to brush them away, revealing a hidden signpost and the second message. The user must then decide which path to take.
- **Endings 4A & 4B:** Clicking the left or right wooden signposts results in different endings, loading a final wide-angle panoramic landscape painting that leads Plu to a new discovery. Players can also click "Go back to choices" at any time to re-explore the alternate path or choose to start over again by clicking "Restart Story".

## How it was built
- **The Artwork:** Every single background layer, environment boundary, choice sign, and character state layer was fully hand-illustrated/painted inside ibis Paint X on a `1920x1080` canvas resolution before being exported as transparent PNGs.
- **The Code Front-End:** Built from scratch using HTML5 and CSS3 flexbox. I removed the browser's scrollbar and stacked the panels on top of each other using absolute positioning and z-index layers. This allowed us to build a clean point-and-click transition system that fades panels in and out seamlessly.
- **The Interaction Engine:** Used Vanilla JS to handle custom responsive click tracking vectors, update image source states smoothly on character hops, and manage state variable indexes to route players to their chosen ending.

## Challenges
This was my first time fully creating a project with CSS, HTML, and JavaScript. Figuring out how elements interact, managing absolute positioning stacks, and writing functional code logic from scratch was a steep learning curve. Additionally, my hand-drawn 1920x1080 canvas illustrations were stretching and distorting to fill different laptop screen heights. I had to learn how browser scaling properties (`object-fit: fill/contain`) work to protect the focal art proportions while keeping the layouts looking seamless. I also ran into the same issue multiple times where invisible background containers were accidentally burying the button layers, making it impossible to click elements. This made me look more into browser layer stacks (`z-index`) and click triggers (`pointer-events`) to untangle the system grid.

## Accomplishments that we're proud of
I am very glad that I was at least able to finish all of the panels and most of the interactions that I had planned under these time constraints.

## What we learned
As a complete beginner, this hackathon taught me a lot about web development/architecture. I learned how to isolate asset files to maintain strict 16:9 widescreen scaling constraints, how to structure cross-panel browser visibility using class injectors, A whole lot of CSS animation and transition properties, how get a decent webpage going and lots more !!

## What's next for Plu's Sanctuary
I would love to revisit and add sound and the rest of my planned interactions, I also want to add fireflies to the endings using CSS. Extending the narrative sounds great as well.
