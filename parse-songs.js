// Parsing script — Ultimate Guitar My Tabs
// Run: node parse-songs.js > songs.js

const raw = `Coldplay|The Scientist
The Black Keys|Little Black Submarines
Green Day|Give Me Novacaine
Alice In Chains|Right Turn
Celine Dion|All By Myself
John Travolta|The Grease Megamix
Michael Jackson|The Girl Is Mine
Creedence Clearwater Revival|Someday Never Comes
Creedence Clearwater Revival|The Night Time Is The Right Time
Creedence Clearwater Revival|Tombstone Shadow
Creedence Clearwater Revival|Good Golly Miss Molly
Creedence Clearwater Revival|Pagan Baby
Creedence Clearwater Revival|Lookin For A Reason
Kevin Parent|Father On The Go
Elton John|Your Song
Ben Harper|Sexual Healing
Zachary Richard|Travailler Cest Trop Dur
Nirvana|In Bloom
Moist|Silver
Blind Melon|Pusher
Blind Melon|Skinned
Dave Matthews Band|Save Me
Queen|Fat Bottomed Girls
Bon Jovi|Wanted Dead Or Alive
Bon Jovi|Ill Be There For You
Bon Jovi|Never Say Goodbye
Bon Jovi|Bad Medicine
Pearl Jam|Just Breathe
Red Hot Chili Peppers|I Could Have Lied
Pearl Jam|Hide Your Love Away
Guns N' Roses|Patience
Guns N' Roses|Civil War
The Tragically Hip|New Orleans Is Sinking
AC/DC|Highway To Hell
AC/DC|You Shook Me All Night Long
Les Colocs|Le Répondeur
Metallica|Master Of Puppets
Gerry Boulet|Seulement Quune Aventure
Bryan Adams|When Youre Gone
Cyndi Lauper|Time After Time
Robin Thicke|Blurred Lines
Green Day|American Idiot
Green Day|Brain Stew
Green Day|Minority
Elvis Presley|Love Me Tender
John Lennon|Happy Xmas War Is Over
Louis Armstrong|What A Wonderful World
Creedence Clearwater Revival|Wholl Stop The Rain
INXS|Never Tear Us Apart
Kenny Rogers|Islands In The Stream
Creedence Clearwater Revival|Hey Tonight
Creedence Clearwater Revival|Hello Mary Lou
Sublime|Wrong Way
Sublime|The Ballad Of Johnny Butt
Sublime|Jailhouse
Sex Pistols|Anarchy In The UK
Red Hot Chili Peppers|Knock Me Down
The Beatles|Cant Buy Me Love
The Beatles|Sgt Peppers Lonely Hearts Club Band
The Beatles|From Me To You
The Beatles|Rock And Roll Music
The Beatles|Mean Mr Mustard
Green Day|Pulling Teeth
Madonna|Like A Prayer
Madonna|Material Girl
Madonna|Like A Virgin
Madonna|Holiday
Culture Club|Do You Really Want To Hurt Me
Spin Doctors|Two Princes
Tom Cochrane|Life Is A Highway
System Of A Down|Radio Video
Green Day|Longview
Green Day|Jesus Of Suburbia
The Beatles|Dont Let Me Down
The Beatles|Youve Got To Hide Your Love Away
The Beatles|Helter Skelter
Janis Joplin|Me And Bobby Mcgee
Pink Floyd|Astronomy Domine
Eric Clapton|Alberta
Mungo Jerry|In The Summertime
The Beatles|Come Together
Jethro Tull|Mother Goose
Jethro Tull|Wondring Aloud
Jethro Tull|Slipstream
Jethro Tull|My God
Jethro Tull|Aqualung
Jethro Tull|Cross-Eyed Mary
Jack Johnson|Hope
Jack Johnson|At Or With Me
Jack Johnson|They Do They Dont
Elton John|Tiny Dancer
Elton John|Rocket Man
Elton John|Daniel
Elton John|Saturday Nights Alright For Fighting
Jack Johnson|Banana Pancakes
Jack Johnson|Upside Down
Jack Johnson|Good People
Supertramp|Breakfast In America
Backstreet Boys|Everybody
Alanis Morissette|Hand In My Pocket
Bob Marley|Redemption Song
Bob Marley|No Woman No Cry
Bob Marley|Is This Love
Bob Marley|One Love People Get Ready
Bob Marley|Waiting In Vain
Bob Marley|Satisfy My Soul
Queen|Crazy Little Thing Called Love
Bob Marley|Exodus
Aqua|Barbie Girl
Nirvana|Nevermind Album
Sam Brown|Stop
Led Zeppelin|Stairway To Heaven
The Police|Every Breath You Take
The Police|Message In A Bottle
The Police|Cant Stand Losing You
The Beatles|Michelle
The Beatles|Eight Days A Week
The Beatles|Get Back
The Beatles|Girl
The Beatles|I Should Have Known Better
The Beatles|Because
The Beatles|Sexy Sadie
The Beatles|Rocky Raccoon
Goo Goo Dolls|Iris
Eagles|New Kid In Town
Eric Clapton|Layla
Eric Clapton|Before You Accuse Me
Phil Collins|Another Day In Paradise
Les Colocs|La Rue Principale
Les Colocs|Mauvais Caractère
Claude Dubois|Comme Un Million De Gens
Les Cowboys Fringants|Le Shack À Hector
Green Day|Wake Me Up When September Ends
Kenny Rogers|The Gambler
Rihanna|Umbrella
Oasis|Dont Look Back In Anger
Les Trois Accords|Vraiment Beau
Les Trois Accords|Tout Nu Sur La Plage
Les Trois Accords|Grand Champion
Eric Clapton|Old Love
Plume Latraverse|Saoul Comme Une Botte
Plume Latraverse|Chambre À Louer
Plume Latraverse|Bobepine
Kain|Embarque Ma Belle
La Bottine Souriante|Sur La Grande Cote
Harmonium|Un Musicien Parmi Tant Dautres
Harmonium|Depuis Lautomne
Chris De Burgh|The Lady In Red
Daft Punk|Get Lucky
U2|I Still Havent Found What Im Looking For
Maroon 5|One More Night
Ben Harper|With My Own Two Hands
The Doobie Brothers|Listen To The Music
Elton John|Social Disease
Opus|Live Is Life
Éric Lapointe|Les Boys
Pearl Jam|Last Kiss
MAGIC!|Rude
Buena Vista Social Club|Chan Chan
Los Lonely Boys|Heaven
Foo Fighters|My Hero
The Rolling Stones|Sympathy For The Devil
Elton John|Sad Songs Say So Much
Coldplay|Viva La Vida
Jack Johnson|Times Like These
Pink Floyd|Shine On You Crazy Diamond
Pink Floyd|Another Brick In The Wall
Pink Floyd|Mother
Jethro Tull|Locomotive Breath
Jethro Tull|Living In The Past
Rancid|Ruby Soho
Alice Cooper|Poison
Counting Crows|Mr Jones
The Offspring|Original Prankster
Pennywise|Bro Hymn
Pearl Jam|Sleeping By Myself
The Smashing Pumpkins|Bullet With Butterfly Wings
Stone Temple Pilots|Plush
Sam Roberts|Brother Down
Guns N' Roses|Youre Crazy
Francis Cabrel|Quand Jaime Une Fois Jaime Pour Toujours
Nirvana|Lithium
Nirvana|Where Did You Sleep Last Night
Nirvana|Rape Me
Nirvana|All Apologies
Nirvana|Oh Me
Red Hot Chili Peppers|Dani California
Red Hot Chili Peppers|My Friends
Christophe|Aline
Françoise Hardy|Tous Les Garçons Et Les Filles
Iron Maiden|Infinite Dreams
Iron Maiden|Strange World
Iron Maiden|Prodigal Son
Nirvana|The Man Who Sold The World
Kevin Parent|Mother Of Our Child
Joe Cocker|You Are So Beautiful
Nirvana|Drain You
Joe Cocker|With A Little Help From My Friends
Poison|Every Rose Has Its Thorn
Supertramp|The Logical Song
Éric Lapointe|Nimporte Quoi
Éric Lapointe|Moman
Okoumé|La Lune Pleure
Okoumé|A Lenfant Que Jaurai
Okoumé|Dis-Moi Pas Ca
Plume Latraverse|Lit Vert
Plume Latraverse|La Biensance
Plume Latraverse|La Ballade Des Caisses De 24
Pearl Jam|Even Flow
Pearl Jam|Elderly Woman Behind The Counter
Pearl Jam|Jeremy
Pearl Jam|Alive
Metallica|The Day That Never Comes
Roy Orbison|Oh Pretty Woman
John Frusciante|How Deep Is Your Love
Jeff Healey|Angel Eyes
Tesla|Love Song
Creedence Clearwater Revival|Have You Ever Seen The Rain
Oasis|Champagne Supernova
KISS|Strutter
Neil Young|Rockin In The Free World
Bob Dylan|Like A Rolling Stone
Cat Stevens|Wild World
Johnny Cash|I Walk The Line
Johnny Cash|Jackson
The Doors|People Are Strange
The Doors|Light My Fire
The Doors|Hello I Love You
Neil Diamond|Sweet Caroline
Creedence Clearwater Revival|Down On The Corner
Zachary Richard|La Ballade De Jean Batailleur
Francis Cabrel|Cétait Lhiver
Francis Cabrel|Rosie
Francis Cabrel|La Dame De Haute-Savoie
Francis Cabrel|Sarbacane
La Compagnie Créole|Ça Fait Rire Les Oiseaux
La Compagnie Créole|Le Bal Masqué
Garolou|La Danse De La Limonade
Garolou|Victoria
Johnny Cash|Folsom Prison Blues
Metallica|Nothing Else Matters
Sheryl Crow|Strong Enough
Sheryl Crow|Cant Cry Anymore
Alice In Chains|Down In A Hole
Alice In Chains|Nutshell
Ben Harper|Steal My Kisses
John Lennon|Jealous Guy
Gerry Boulet|Toujours Vivant
Gerry Boulet|Ayoye
Gerry Boulet|Le Chant De La Douleur
Gerry Boulet|Les Yeux Du Coeur
Gerry Boulet|Un Beau Grand Bateau
Gerry Boulet|Une Derniere Fois
Offenbach|Je Chante Comme Un Coyote
Offenbach|Promenade Sur Mars
Offenbach|Mes Blues Passent Plus Dans Porte
Bruno Mars|If I Knew
Marjo|Provocante
War|Low Rider
Flo Rida|Low
Blur|Song 2
Mark Ronson|Uptown Funk
Louis-Jean Cormier|Ce Soir Lamour Est Dans Tes Yeux
Damien Robitaille|Je Tombe
The Offspring|Self Esteem
The Offspring|Why Dont You Get A Job
The Beatles|Yesterday
The Beatles|And I Love Her
The Beatles|All My Loving
The Beatles|When Im Sixty Four
The Beatles|Ticket To Ride
George Harrison|My Sweet Lord
The Beatles|She Loves You
The Beatles|Love Me Do
The Beatles|I Am The Walrus
The Beatles|Please Please Me
The Beatles|Ob-La-Di Ob-La-Da
The Beatles|We Can Work It Out
The Beatles|Revolution
The Beatles|Lady Madonna
The Beatles|Mother Natures Son
The Beatles|Babys In Black
Santana|Black Magic Woman
La Chicane|Calvaire
Scorpions|Still Loving You
Lenny Kravitz|American Woman
Frankie Valli|Cant Take My Eyes Off You
The Pogues|Dirty Old Town
The Dubliners|Whiskey On A Sunday
Les Trois Accords|Saskatchewan
Les Trois Accords|La Lune
Les Trois Accords|Pice De Viande
Les Trois Accords|Lucille
Les Trois Accords|Loin Dici
Beau Dommage|Le Geant Beaupre
Beau Dommage|La Complainte Du Phoque En Alaska
Beau Dommage|Harmonie Du Soir À Châteauguay
Beau Dommage|Le Picbois
Beau Dommage|Tous Les Palmiers
Beau Dommage|Ginette
Harmonium|Dixie
Kevin Parent|Seigneur
Zebulon|Y Fait Chaud
Isabelle Boulay|Entre Matane Et Baton Rouge
Jonathan Painchaud|Cest La Vie
Cayouche|Lalcool Au Volant
Kain|Mexico
Kain|Comme Dans Ltemps
R.E.M.|Losing My Religion
R.E.M.|Everybody Hurts
R.E.M.|Shiny Happy People
Red Hot Chili Peppers|By The Way
Toto|Rosanna
Éric Lapointe|Terre Promise
Éric Lapointe|On Commence À Squitter
Phillip Phillips|Home
Mumford & Sons|I Will Wait
Garth Brooks|Friends In Low Places
The Rembrandts|Ill Be There For You
Stevie Wonder|Part-Time Lover
Queen|We Are The Champions
The Beatles|Yellow Submarine
The Beatles|Lucy In The Sky With Diamonds
The Beatles|Nowhere Man
Collective Soul|The World I Know
Collective Soul|Shine
Garth Brooks|The Thunder Rolls
KISS|Rock And Roll All Nite
Pink Floyd|Welcome To The Machine
The Beatles|Money Thats What I Want
The Beatles|The Ballad Of John And Yoko
Red Hot Chili Peppers|Funky Monks
INXS|New Sensation
Kansas|Dust In The Wind
Simon & Garfunkel|Mrs Robinson
Simon & Garfunkel|El Cóndor Pasa
Captain & Tennille|Love Will Keep Us Together
Joe Dassin|Le Petit Pain Au Chocolat
Jean Leloup|Paradis City
Black Sabbath|War Pigs
Weezer|Say It Aint So
Alice In Chains|Rooster
Green Day|Boulevard Of Broken Dreams
The Mamas & The Papas|California Dreamin
Sinéad O'Connor|Nothing Compares 2 U
Justin Timberlake|What Goes Around
La Chicane|Juste Pour Voir Le Monde
La Chicane|Tu Mmanques
Marc Dery|Poisson Davril
Okoumé|Europe
Weezer|Island In The Sun
Tom Petty|Free Fallin
Tom Petty|Mary Janes Last Dance
The Weeknd|Cant Feel My Face
Cat Stevens|Father And Son
Peter Gabriel|Sledgehammer
The Struts|Could Have Been Me
Muse|Mercy
Patrick Bruel|Qui A Le Droit
Patrick Bruel|Casser La Voix
Joe Dassin|Salut Les Amoureux
Steve Miller Band|Abracadabra
Steve Miller Band|The Joker
Bruno Mars|The Lazy Song
Lionel Richie|Hello
Bad Religion|21St Century Digital Boy
CAKE|I Will Survive
Creedence Clearwater Revival|Proud Mary
Creedence Clearwater Revival|Suzie Q
Creedence Clearwater Revival|Lookin Out My Back Door
Creedence Clearwater Revival|Travelin Band
The Beach Boys|God Only Knows
The Beach Boys|Surfin USA
The Beach Boys|California Girls
The Beach Boys|I Get Around
The Beach Boys|Barbara Ann
The Beach Boys|Fun Fun Fun
The Beach Boys|In My Room
The Beach Boys|Surfin Safari
Bernard Adamus|Brun La Couleur De Lamour
Bernard Adamus|La Question À 100 Piasses
Spice Girls|Wannabe
Backstreet Boys|Quit Playing Games With My Heart
Cyndi Lauper|Girls Just Want To Have Fun
Michael Bublé|Sway
Eminem|Lose Yourself
Ozzy Osbourne|Mama Im Coming Home
Ozzy Osbourne|Dreamer
Ozzy Osbourne|Goodbye To Romance
Beau Dommage|23 Decembre
Bon Jovi|Its My Life
Bon Jovi|Bed Of Roses
Extreme|More Than Words
Creed|My Sacrifice
Mr. Big|To Be With You
Don Henley|The Boys Of Summer
Justin Bieber|Love Yourself
Aerosmith|I Dont Want To Miss A Thing
Aerosmith|Cryin
Aerosmith|Crazy
Aerosmith|Janies Got A Gun
Neil Young|Heart Of Gold
Gipsy Kings|Bamboleo
Gipsy Kings|Volare
Gipsy Kings|Baila Me
Bruno Mars|Marry You
Neil Young|Harvest Moon
Vanessa Paradis|Joe Le Taxi
Roch Voisine|La Légende Oochigeas
Roch Voisine|Helene
Guns N' Roses|Sweet Child O Mine
Guns N' Roses|Paradise City
Guns N' Roses|You Could Be Mine
Alice In Chains|Man In The Box
Éric Lapointe|Lamour Existe Encore
Éric Lapointe|Marie-Stone
Creedence Clearwater Revival|I Heard It Through The Grapevine
Marjo|Sil Fallait
Harmonium|Pour Un Instant
Harmonium|Aujourdhui Je Dis Bonjour La Vie
Celine Dion|Pour Que Tu Maimes Encore
Prince|When Doves Cry
Michael Sembello|Maniac
ABBA|Super Trouper
Midnight Oil|Beds Are Burning
Duran Duran|The Wild Boys
Katrina And The Waves|Walking On Sunshine
The Tokens|The Lion Sleeps Tonight
Queen|Radio Ga Ga
Toni Basil|Mickey
Wham!|Wake Me Up Before You Go-Go
Michael Jackson|The Way You Make Me Feel
Carl Douglas|Kung Fu Fighting
UB40|Red Red Wine
Stevie Wonder|I Wish
Coolio|Gangstas Paradise
Montell Jordan|This Is How We Do It
Van Morrison|Moondance
Van Morrison|Brown Eyed Girl
Blue Rodeo|Lost Together
Green Day|Welcome To Paradise
The Hives|Hate To Say I Told You So
No Doubt|Dont Speak
Led Zeppelin|Rock And Roll
Iron Maiden|Running Free
Iron Maiden|Wasted Years
Metallica|Fade To Black
Pitbull|Timber
Gildor Roy|Tu M Montes Sa Tete
John Lennon|Instant Karma
Simon & Garfunkel|The Sound Of Silence
Jonathan Roy|Daniella Denmark
Michael Bublé|Save The Last Dance For Me
USA For Africa|We Are The World
Dire Straits|Sultans Of Swing
The Offspring|Pretty Fly For A White Guy
Toby Keith|Red Solo Cup
Richard Desjardins|Quand Jaime Une Fois
Pearl Jam|Yellow Ledbetter
Limp Bizkit|Behind Blue Eyes
Bush|Glycerine
Bush|Machinehead
Everclear|Local God
Everclear|Santa Monica
Everlast|What Its Like
Peter Gabriel|Solsbury Hill
Bee Gees|How Deep Is Your Love
Fugees|Killing Me Softly
Collective Soul|December
The Beatles|Let It Be
John Lennon|Imagine
Fastball|The Way
LP|Lost On You
LP|Muddy Waters
Van Halen|Jump
Celine Dion|My Heart Will Go On
Sade|Smooth Operator
Philip Bailey|Easy Lover
Hall & Oates|Maneater
Stevie Wonder|Sir Duke
Men Without Hats|The Safety Dance
Michael Jackson|Dont Stop Til You Get Enough
Tom Jones|Sex Bomb
Ricky Martin|Livin La Vida Loca
Blue Rodeo|5 Days In May
Rod Stewart|Youre In My Heart
Rod Stewart|Da Ya Think Im Sexy
Prince|Purple Rain
Michael Jackson|Pyt Pretty Young Thing
Pearl Jam|Daughter
Beyoncé|Halo
Iron Maiden|Fear Of The Dark
U2|Sunday Bloody Sunday
U2|Desire
U2|Beautiful Day
U2|Angel Of Harlem
Blink-182|All The Small Things
Ray Parker Jr.|Ghostbusters
Bob Seger|Old Time Rock And Roll
Harmonium|Attends-Moi
Harmonium|Si Doucement
Tracy Chapman|Give Me One Reason
Kings Of Leon|Sex On Fire
Ed Sheeran|Shape Of You
ABBA|I Have A Dream
ABBA|Voulez-Vous
ABBA|Dancing Queen
Bee Gees|Stayin Alive
Eagles|Seven Bridges Road
Blondie|Heart Of Glass
Tears For Fears|Everybody Wants To Rule The World
Red Hot Chili Peppers|Cant Stop
Peter Frampton|Baby I Love Your Way
Stealers Wheel|Stuck In The Middle With You
Manau|La Tribu De Dana
Julien Clerc|Cœur De Rocker
Laura Branigan|Self Control
Julian Lennon|Too Late For Goodbyes
Billy Ocean|Caribbean Queen
Bruce Springsteen|Dancing In The Dark
Bruce Springsteen|Glory Days
Bruno Mars|24K Magic
Hall & Oates|Kiss On My List
Enrique Iglesias|Bailando
Bob Bissonnette|Y Sont Toutes Folles
Les Respectables|Ma Vie À Lheure
Metallica|Wherever I May Roam
Marilyn Manson|Sweet Dreams
Misc Musicals|Starmania - Le Blues Du Businessman
Soundgarden|Black Hole Sun
Jack Johnson|Do You Remember
Aerosmith|Dream On
Duran Duran|Hungry Like The Wolf
Hugo Lapointe|Celibataire
Éric Lapointe|Motel 117
Hootie & The Blowfish|Only Wanna Be With You
3 Doors Down|Kryptonite
Marjo|Ailleurs
Jean-Pierre Ferland|Tes Mon Amour Tes Ma Maitresse
Ginette Reno|Lessentiel
Michel Louvain|La Dame En Bleu
Nanette Workman|Call Girl
Radiohead|Fake Plastic Trees
Crowded House|Dont Dream Its Over
The Verve|Bitter Sweet Symphony
Celine Dion|Lamour Existe Encore
Patrick Norman|Quand On Est En Amour
Les Cowboys Fringants|En Berne
Vincent Vallières|On Va Saimer Encore
Les Cowboys Fringants|Marine Marchande
Les Cowboys Fringants|Plus Rien
Les Cowboys Fringants|Marcel Galarneau
Kevin Parent|Fréquenter Loubli
Les Colocs|Belzebuth
Les Colocs|Bon Yeu
Les Colocs|Le Pouding A Larsenic
Les Trois Accords|Elle Sappelait Serge
Les Trois Accords|Dans Mon Corps
Les Trois Accords|Hawaiienne
Robert Charlebois|Lindberg
Claude Dubois|Femmes De Rêve
Bleu Jeans Bleu|Jte Gâte All Dressed
Les Respectables|Largent Fait Le Bonheur
Yann Perreau|Beau Comme On Saime
Plume Latraverse|Le Rock N Roll Du Grand Flanc Mou
Nickelback|How You Remind Me
System Of A Down|Aerials
Jonny Lang|Lie To Me
Linkin Park|In The End
Marcy Playground|Sex And Candy
Creedence Clearwater Revival|Up Around The Bend
Michel Pagliaro|Jentend Frapper
Fats Domino|Blueberry Hill
The Platters|Only You
Alice In Chains|Over Now
Barbara|Laigle Noir
Nirvana|Lake Of Fire
Stevie Ray Vaughan|Pride And Joy
Eric Clapton|Lay Down Sally
The Rolling Stones|Honky Tonk Women
The Rolling Stones|Angie
The Rolling Stones|I Cant Get No Satisfaction
The Rolling Stones|Start Me Up
Motörhead|Ace Of Spades
Dion|Runaround Sue
Chubby Checker|Lets Twist Again
Weezer|Buddy Holly
Weezer|Beverly Hills
Sublime|What I Got
Bruce Springsteen|Born In The Usa
Paul Piché|Essaye Donc Pas
Paul Piché|Réjean
Louis Armstrong|La Vie En Rose
Gilles Valiquette|La Vie En Rose
Dan Bigras|Trois Petits Cochons
Creedence Clearwater Revival|Lodi
Dobie Gray|Drift Away
Richard Desjardins|Le Chant Du Bum
Mario Pelchat|Pleurs Dans La Pluie
The Clash|Should I Stay Or Should I Go
U2|With Or Without You
Les B.B.|Tu Ne Sauras Jamais
Les B.B.|Donne Moi Ma Chance
Les B.B.|Seul Au Combat
David Lee Roth|Just A Gigolo
The Dubliners|Whiskey In The Jar
The Rumjacks|An Irish Pub Song
Pierre Bachelet|Elle Est Dailleurs
a-ha|Take On Me
Supertramp|Give A Little Bit
Claude Dubois|Femme De Société
Richard Marx|Right Here Waiting
Cheap Trick|I Want You To Want Me
Chris Stapleton|Tennessee Whiskey
Kool & The Gang|Celebration
The Strokes|Last Nite
Harry Styles|Sign Of The Times
The Cranberries|Free To Decide
The Cranberries|Ode To My Family
The Cranberries|Zombie
Ed Sheeran|Perfect
The Hollies|Long Cool Woman In A Black Dress
Adele|Rolling In The Deep
Gotye|Somebody That I Used To Know
The Irish Rovers|Drunken Sailor
Amy Winehouse|Rehab
The Animals|House Of The Rising Sun
Jimi Hendrix|Hey Joe
Bob Marley|Jamming
Justin Timberlake|Summer Love
John Mellencamp|Hurts So Good
Dwight Yoakam|Guitars Cadillacs
Stray Cats|Rock This Town
Guns N' Roses|Dont Cry
Robert Palmer|Bad Case Of Loving You
Ray Charles|Hit The Road Jack
The Lumineers|Ho Hey
Beau Dommage|A Toutes Les Fois
The Doors|Riders On The Storm
The Proclaimers|Im Gonna Be 500 Miles
Jonathan Painchaud|Pousse Pousse
Robert Charlebois|Jtaime Comme Un Fou
The Beatles|Hey Jude
Michel Pagliaro|What The Hell I Got
Bob Marley|Could You Be Loved
Sheryl Crow|If It Makes You Happy
Green Day|Basket Case
Phil Collins|Against All Odds
Phil Collins|A Groovy Kind Of Love
Phil Collins|In The Air Tonight
Dolly Parton|Jolene
Hubert Lenoir|Fille De Personne
Aretha Franklin|Respect
Norah Jones|Turn Me On
Bernard Adamus|Acapulco
Bernard Adamus|Hola Les Lolos
Renaud|Hexagone
Les Rita Mitsouko|Marcia Baila
Michel Rivard|Méfiez-Vous Du Grand Amour
Francis Cabrel|Cest Écrit
Francis Cabrel|Encore Et Encore
Francis Cabrel|Lencre De Tes Yeux
George Michael|Careless Whisper
Eric Carmen|All By Myself
Roxette|It Must Have Been Love
Post Malone|Better Now
Steppenwolf|Born To Be Wild
Van Halen|You Really Got Me
Grease|Summer Nights
Weezer|Say It Aint So
Patrick Bruel|Place Des Grands Hommes
Evanescence|Bring Me To Life
Kenny Rogers|Lady
Foreigner|I Want To Know What Love Is
Lionel Richie|Say You Say Me
Suzanne Vega|Luka
The Dead South|In Hell Ill Be In Good Company
Rick Astley|Never Gonna Give You Up
Corey Hart|Sunglasses At Night
The Bangles|Walk Like An Egyptian
Lionel Richie|Stuck On You
The Clash|Rock The Casbah
Paula Abdul|Straight Up
Talk Talk|Its My Life
Men At Work|Who Can It Be Now
Laura Branigan|Gloria
Prince|When Doves Cry
Taco|Puttin On The Ritz
Queen|Somebody To Love
Queen|Killer Queen
Eagles|Victim Of Love
Eagles|Heartache Tonight
The Cars|Drive
The Police|Dont Stand So Close To Me
Axelle Red|Sensualité
Misc Soundtrack|A Star Is Born - Shallow
Julie Masse|Cest Zéro
Mes Aïeux|Degeneration
Éric Lapointe|Loadé Comme Un Gun
Pierre Lapointe|Le Colombarium
Éric Lapointe|Deux Fois La Même Histoire
Faith No More|Epic
Berlin|Take My Breath Away
John Lennon|Woman
Hall & Oates|Everytime You Go Away
Boule Noire|Aimer Damour
Les Trois Accords|Gros Mammouth Chanson
Les Trois Accords|Le Bureau Du Médecin
Zebulon|Marie Louise
The Beatles|Let It Be
Semisonic|Closing Time
Daniel Bélanger|Les Deux Printemps
Live|Selling The Drama
Live|The Dolphins Cry
Electric Light Orchestra|Dont Bring Me Down
Jeff Buckley|Hallelujah
Jason Mraz|Im Yours
David Bowie|Ziggy Stardust
Bigflo & Oli|Dommage
Daniel Boucher|Chez Nous
Vilain Pingouin|Le Train
Daniel Bélanger|Sèche Tes Pleurs
Daniel Bélanger|Rêver Mieux
Daniel Bélanger|Te Quitter
Snow|Informer
Deee-Lite|Groove Is In The Heart
Ozzy Osbourne|Mr Crowley
The Beatles|Strawberry Fields Forever
Meghan Trainor|All About That Bass
Plume Latraverse|Jonquière
Pat Benatar|Hit Me With Your Best Shot
Bleu Jeans Bleu|Coton Ouaté
Led Zeppelin|Whole Lotta Love
Aerosmith|Sweet Emotion
Creedence Clearwater Revival|Born On The Bayou
Creedence Clearwater Revival|Cotton Fields
Creedence Clearwater Revival|Green River
Sting|Englishman In New York
The Beatles|Help
Willie Nelson|Always On My Mind
Haddaway|What Is Love
Snap|Rhythm Is A Dancer
Corona|The Rhythm Of The Night
Robert Johnson|Sweet Home Chicago
Eric Clapton|Nobody Knows You When Youre Down And Out
Christophe Maé|Il Est Où Le Bonheur
Post Malone|Rockstar
The Beatles|Here Comes The Sun
The Beatles|I Want To Hold Your Hand
The Beatles|A Day In The Life
The Beatles|The Long And Winding Road
The Beatles|Oh Darling
The Beatles|Day Tripper
The Beatles|All You Need Is Love
The Beatles|Dear Prudence
The Beatles|Back In The USSR
The Beatles|I Feel Fine
Genesis|I Cant Dance
Salvatore Adamo|Cest Ma Vie
Richard Anthony|Itsi Bitsi Petit Bikini
Charles Aznavour|For Me Formidable
Tears For Fears|Shout
Black Sabbath|Changes
Dalida|Le Temps Des Fleurs
Charles Aznavour|La Bohème
Charles Aznavour|Hier Encore
Félix Leclerc|Le Petit Train Du Nord
Félix Leclerc|Le Petit Bonheur
France Gall|Sacré Charlemagne
Sylvie Vartan|La Plus Belle Pour Aller Danser
Robert Charlebois|The Frog Song
La Bottine Souriante|La Ziguezon
Nancy Sinatra|These Boots Are Made For Walkin
Diane Dufresne|Jai Rencontré Lhomme De Ma Vie
Roy Orbison|You Got It
Donald Lautrec|Manon Viens Danser Le Ska
Nanette Workman|Danser Danser
Billy Ray Cyrus|Achy Breaky Heart
Elvis Presley|Its Now Or Never
The Presidents Of The USA|Peaches
Jerry Lee Lewis|Great Balls Of Fire
The Beatles|Something
Depeche Mode|Personal Jesus
Les Cowboys Fringants|Lamérique Pleure
Better Than Ezra|Good
Les Trois Accords|Ouvre Tes Yeux Simon
Celine Dion|Im Alive
Blink-182|Whats My Age Again
Blink-182|The Rock Show
Misc Traditional|Chevaliers De La Table Ronde
Queen|Another One Bites The Dust
Garou|Sous Le Vent
Offenbach|La Voix Que Jai
Tones And I|Dance Monkey
The Police|Roxanne
Les Cowboys Fringants|Tant Quon Aura De Lamour
Lil Nas X|Old Town Road
Mark Ronson|Valerie
Eric Clapton|Tears In Heaven
Eric Clapton|Layla
Eric Clapton|Cocaine
Eric Clapton|Knocking On Heavens Door
Eric Clapton|Wonderful Tonight
Nirvana|Smells Like Teen Spirit
Nirvana|Come As You Are
Nirvana|Heart Shaped Box
Nirvana|Polly
Nirvana|Something In The Way
Nirvana|Dumb
Nirvana|Pennyroyal Tea
Nirvana|Lounge Act
Nirvana|Breed
Nirvana|About A Girl
Pearl Jam|Breath
Live|Lightning Crashes
Def Leppard|Love Bites
Goo Goo Dolls|Name
Bon Jovi|Always
Creedence Clearwater Revival|Bad Moon Rising
Creedence Clearwater Revival|The Midnight Special
Green Day|Warning
Nine Inch Nails|Closer
Bob Marley|Three Little Birds
Bob Marley|Buffalo Soldier
Bob Marley|Stir It Up
Bob Marley|Get Up Stand Up
Bob Marley|This Train
Bleu Jeans Bleu|Jai Mangé Trop De Patates Frites
Elton John|Goodbye Yellow Brick Road
Elton John|Im Still Standing
Elton John|Crocodile Rock
Elton John|Candle In The Wind
Elton John|Bennie And The Jets
Elton John|I Guess Thats Why They Call It The Blues
Elton John|Nikita
Elton John|Honky Cat
Elton John|Levon
Jack Johnson|Better Together
Jack Johnson|Sitting Waiting Wishing
Alannah Myles|Black Velvet
Ozzy Osbourne|Crazy Train
Def Leppard|Animal
Skid Row|18 And Life
David Bowie|Dancing In The Street
Gorillaz|Clint Eastwood
Iron Maiden|Only The Good Die Young
Ini Kamoze|Here Comes The Hotstepper
Maroon 5|She Will Be Loved
Maroon 5|This Love
Maroon 5|Moves Like Jagger
Franz Ferdinand|No You Girls
Franz Ferdinand|Take Me Out
Michael Jackson|Wanna Be Startin Somethin
Queen|Bohemian Rhapsody
Queen|I Want To Break Free
Ace Of Base|All That She Wants
Natalie Imbruglia|Torn
Lou Bega|Mambo No 5
Billy Idol|Mony Mony
Jacques Dutronc|Les Cactus
La Compagnie Créole|Vive Le Douanier Rousseau
Red Hot Chili Peppers|Scar Tissue
Grease|Youre The One That I Want
Edie Brickell|What I Am
Kenny Loggins|Footloose
Creedence Clearwater Revival|Fortunate Son
Chuck Berry|Roll Over Beethoven
The Doors|Love Me Two Times
Shocking Blue|Venus
Soldat Louis|Du Rhum Des Femmes
Chuck Berry|Johnny B Goode
Freddie Mercury|Living On My Own
Willie Nelson|On The Road Again
Santana|Smooth
Our Lady Peace|Clumsy
Nathaniel Rateliff|Sob
Red Hot Chili Peppers|Under The Bridge
The Beatles|While My Guitar Gently Weeps
Vilain Pingouin|Les Belles Années
Kain|Y Diront Ben Cqui Voudront En Ville
Buddy Holly|Oh Boy
Gaston Mandeville|Le Vieux Du Bas-Du-Fleuve
Jonathan Painchaud|Si Tes Vivant
Johnny Cash|Ring Of Fire
Oasis|Wonderwall
Éric Lapointe|La Bartendresse
The Beach Boys|Sloop John B
Les Cowboys Fringants|Sur Mon Épaule
Disturbed|The Sound Of Silence
Lonestar|Amazed
Roxette|Joyride
Britney Spears|Baby One More Time
Toto|Africa
Hall & Oates|Kiss On My List
Daniel Bélanger|Dis Tout Sans Rien Dire
Daniel Bélanger|Fous Nimporte Ou
Les Cowboys Fringants|Heavy Metal
Jean Leloup|1990
Jean Leloup|Isabelle
Jean Leloup|Lamour Est Sans Pitié
Jean Leloup|Je Joue De La Guitare
Jean Leloup|Rock N Roll Pauvreté
Jean Leloup|Edgar
Les Respectables|L Homme 7 Up
Plume Latraverse|Léon Le Caméléon
Zebulon|Job Steady
Offenbach|Faut Que Jme Pousse
Offenbach|Seulement Une Aventure
Les Respectables|On Fait Ce Quon Aime
Les Colocs|Pis Si O Moins
Francis Cabrel|Corrida
Guns N' Roses|November Rain
Huey Lewis & The News|The Power Of Love
Okoumé|Le Bruit Des Origines
The Tragically Hip|Little Bones
Pink Floyd|Time
Alanis Morissette|You Oughta Know
Gregory Charles|Think Of You
The Tragically Hip|Long Time Running
Francis Cabrel|La Quiero A Morir
The Ronettes|Be My Baby
Eddie Vedder|Hide Your Love Away
Joe Bocan|Repartir À Zéro
Marie Carmen|Entre Lombre Et La Lumière
Frank Sinatra|My Way
Gipsy Kings|Djobi Djoba
Dolly Parton|I Will Always Love You
Foo Fighters|The Pretender
Nazareth|Love Hurts
Joe Cocker|You Can Leave Your Hat On
Filter|Take A Picture
Didier Barbelivien|Là Où Je Taime
Daniel Bélanger|Chante Encore
Milow|Ayo Technology
Richard Seguin|Aux Portes Du Matin
Richard Desjardins|Et Jai Couché Dans Mon Char
Richard Desjardins|Le Coeur Est Un Oiseau
Richard Desjardins|Tu Maimes Tu
Kain|Parle-Moi Dtoi
Claude Dubois|Artistes
Claude Dubois|Le Blues Du Business Man
Cayouche|À L Auberge Du Quai De L Horloge
Cayouche|Fume Fume
Cayouche|Grand-Pere Jos
Cayouche|La 6-49
Cayouche|La Reine Du Bingo
Daniel Bélanger|Ensorcele
Daniel Bélanger|La Folie En Quatre
Daniel Bélanger|Le Parapluie
Metallica|Whiskey In The Jar
Chuck Berry|You Never Can Tell
Harry Belafonte|Jump In The Line
Zachary Richard|Larbre Est Dans Ses Feuilles
Garth Brooks|Two Of A Kind Workin On A Full House
Eagles|Hotel California
Willie Lamothe|Mille Après Mille
Gildor Roy|Une Autre Chambre Dhôtel
Creedence Clearwater Revival|Lodi
Elvis Presley|Cant Help Falling In Love
Barbra Streisand|Woman In Love
Tina Turner|Whats Love Got To Do With It
Phil Collins|You Cant Hurry Love
Elvis Presley|Hound Dog
Fabienne Thibeault|Ma Mere Chantait Toujours
Michel Polnareff|La Poupée Qui Fait Non
Quiet Riot|Cum On Feel The Noize
Green Day|Holiday
Irene Cara|Flashdance What A Feeling
Twisted Sister|Were Not Gonna Take It
Beastie Boys|You Gotta Fight For Your Right To Party
Robert Palmer|Addicted To Love
Olivia Newton-John|Physical
Sean Paul|Temperature
Eminem|Cleanin Out My Closet
Måneskin|Beggin
Darius Rucker|Wagon Wheel
Walker Hayes|Fancy Like
Ofenbach|Katchi
Robert Charlebois|Entre Deux Joints
Luc De Larochellière|Cash City
Luc De Larochellière|Si Fragile
Richard Desjardins|Le Bon Gars
Éric Lapointe|Mon Ange
Daniel Bélanger|Imparfait
Les Colocs|La Comète
Jean Leloup|Sang Dencre
Jean Leloup|Lantiquaire
Marjo|Chats Sauvages
Marjo|Doux
Garou|Sous Le Vent
Celine Dion|Jirai Où Tu Iras
Plastic Bertrand|Ça Plane Pour Moi
Les Cowboys Fringants|Toune Dautomne
Paul Piché|Ya Pas Grand Chose Dans Le Ciel Soir
Beau Dommage|Le Blues Dla Metropole
Michel Rivard|Tout Va Bien
Jim Corcoran|Jespère Quils Vendent Dla Bière Au Ciel
Grim Skunk|Mange Dla Marde
The Weeknd|Blinding Lights
Whitney Houston|I Will Always Love You
The White Stripes|Seven Nation Army
Santana|Put Your Lights On
The Police|Walking On The Moon
Kylie Minogue|Cant Get You Out Of My Head
Tal Bachman|Shes So High
Pearl Jam|Indifference
Michael Jackson|Bad
Michael Jackson|Billie Jean
Michael Jackson|Thriller
Sublime|Santeria
Shania Twain|Man I Feel Like A Woman
Vilain Pingouin|Délinquance
Sheryl Crow|All I Wanna Do
Mötley Crüe|Dr Feelgood
Madonna|Papa Dont Preach
Iron Maiden|Run To The Hills
Leonard Cohen|Hallelujah
Our Lady Peace|Supermans Dead
Lady Gaga|Poker Face
Soul Asylum|Runaway Train
Tripping Daisy|I Got A Girl
Dean Martin|Thats Amore
Sam Roberts|Where Have All The Good People Gone
Renee Martel|Jai Un Amour Qui Ne Veut Pas Mourir
Radiohead|Karma Police
OutKast|Hey Ya
Red Hot Chili Peppers|Breaking The Girl
George Michael|Faith
Scorpions|Wind Of Change
Red Hot Chili Peppers|Give It Away
U2|One
The Cure|Friday Im In Love
Def Leppard|Lets Get Rocked
Meredith Brooks|Bitch
Frank Sinatra|New York New York
The Offspring|Bad Habit
Daniel Boucher|Le Poête Des Temps Gris
Plume Latraverse|El Niño
La Chicane|Jusquà Dimanche
Laurence Jalbert|Tomber
Laurence Jalbert|Jeter Un Sort
Julie Masse|Les Idées Noires
Ozzy Osbourne|Under The Graveyard
Tom Petty|You Dont Know How It Feels
Tom Petty|I Wont Back Down
Genesis|Jesus He Knows Me
Dubmatique|La Force De Comprendre
Loco Locass|Spleen Montrèal
Blondie|One Way Or Another
Smash Mouth|Im A Believer
John Paul Young|Love Is In The Air
Stone Temple Pilots|Interstate Love Song
Coldplay|Viva La Vida
Eagles|The Long Run
R.E.M.|Man On The Moon
System Of A Down|Toxicity
Dolly Parton|9 To 5
Jason Mraz|I Wont Give Up
Creed|My Sacrifice
The Smashing Pumpkins|1979
Hugo Lapointe|Avec Toi Je Maimais Plus
Bon Jovi|Livin On A Prayer
Mötley Crüe|Kickstart My Heart
Mötley Crüe|Without You
Bobby McFerrin|Dont Worry Be Happy
Simply Red|Holding Back The Years
Harmonium|100000 Raisons
Iron Maiden|The Evil That Men Do
Michael Jackson|Thriller
Green Day|Good Riddance Time Of Your Life
Johnny Cash|A Boy Named Sue
Patricia Kaas|Mon Mec À Moi
Cayouche|La Chaine De Mon Tracteur
Afroman|Because I Got High
2Pac|California Love
Cooper Alan|The Fridge
Eagles|Hotel California
Muse|Resistance
Toto|Rosanna
Roxette|The Look
The Knack|My Sharona
Incubus|Drive
The Tragically Hip|Blow At High Dough
Jamiroquai|Virtual Insanity
Nickelback|Rockstar
Alan Jackson|Its Five Oclock Somewhere
Patricia Kaas|Mademoiselle Chante Le Blues
Whitney Houston|Greatest Love Of All
Lisa LeBlanc|Jpas Un Cowboy
Les Cowboys Fringants|La Catherine
No Doubt|Spiderwebs
Amy Winehouse|Back To Black
Billy Joel|Its Still Rock And Roll To Me
Milli Vanilli|Blame It On The Rain
Milli Vanilli|Girl Im Gonna Miss You
Alan Jackson|Summertime Blues
Madonna|La Isla Bonita
ABBA|Chiquitita
Santana|Maria Maria
Red Hot Chili Peppers|Police Station
The Everly Brothers|Bye Bye Love
Gipsy Kings|A Mi Manera
Elvis Crespo|Suavemente
Les Frères À Chval|Cauchemar
J.J. Lionel|La Danse Des Canards
Metallica|My Friend Of Misery
The Tragically Hip|Boots Or Hearts
Simon & Garfunkel|Cecilia
Michel Fugain|La Fête
Michel Fugain|Fais Comme Loiseau
Michael Jackson|Black Or White
Dwight Yoakam|Honky Tonk Man
Van Morrison|Into The Mystic
4 Non Blondes|Whats Up
Journey|Dont Stop Believin
Kool & The Gang|Cherish
TALK|Run Away To Mars
Cayouche|Captain Morgan
Oliver Anthony Music|Rich Men North Of Richmond
Zach Bryan|Something In The Orange
Train|Drops Of Jupiter
Simply Red|If You Dont Know Me By Now
John Mayer|Gravity
Félix Leclerc|Le Petit Bonheur
La Compagnie Créole|Colle Colle
La Compagnie Créole|Cest Bon Pour Le Moral
Édith Piaf|Hymne À Lamour
Joe Dassin|Le Moustique
Benjamin Ingrosso|All Night Long
Louise Attaque|Jtemmène Au Vent
Michael Bolton|When A Man Loves A Woman
Claude Barzotti|Le Rital
Michel Sardou|En Chantant
Alain Morisod|River Blue
Indochine|Jai Demandé À La Lune
Ramones|I Wanna Be Sedated
The Everly Brothers|Wake Up Little Susie
Dire Straits|Walk Of Life
Lendemain De Veille|On Était Soûls
Francis Cabrel|Je Taimais Je Taime Je Taimerai
Sex Pistols|God Save The Queen
Ozzy Osbourne|Shot In The Dark
Benson Boone|Beautiful Things
Benson Boone|Mystical Magical
Morgan Wallen|Love Somebody
Shaboozey|A Bar Song Tipsy
Lynyrd Skynyrd|Simple Man
Prince|Purple Rain
Josh Turner|Your Man
Muddy Waters|Rollin And Tumblin
Eric Clapton|Im Tore Down
James Brown|I Got You I Feel Good
Tony Orlando & Dawn|Tie A Yellow Ribbon
John Mayer|Gravity
House Of Pain|Jump Around
ABBA|Fernando
Roy Orbison|Oh Pretty Woman
Willie Nelson|Seven Spanish Angels
Me Mom & Morgentaler|My Mothers Friends
Avicii|Wake Me Up
The Tragically Hip|New Orleans Is Sinking`;

// Category mapping by artist
const artistStyle = {
  // ROCK QC
  'Harmonium': 'Rock QC', 'Beau Dommage': 'Rock QC', 'Les Colocs': 'Rock QC',
  'Les Cowboys Fringants': 'Rock QC', 'Robert Charlebois': 'Rock QC', 'Gerry Boulet': 'Rock QC',
  'Offenbach': 'Rock QC', 'Plume Latraverse': 'Rock QC', 'Kain': 'Rock QC',
  'Kevin Parent': 'Rock QC', 'Éric Lapointe': 'Rock QC', 'Jean Leloup': 'Rock QC',
  'Les Trois Accords': 'Rock QC', 'Marjo': 'Rock QC', 'Paul Piché': 'Rock QC',
  'Zebulon': 'Rock QC', 'Bernard Adamus': 'Rock QC', 'Bleu Jeans Bleu': 'Rock QC',
  'Daniel Bélanger': 'Rock QC', 'Okoumé': 'Rock QC', 'La Chicane': 'Rock QC',
  'Vilain Pingouin': 'Rock QC', 'Michel Pagliaro': 'Rock QC', 'Jonathan Painchaud': 'Rock QC',
  'Cayouche': 'Rock QC', 'Les Respectables': 'Rock QC', 'Gaston Mandeville': 'Rock QC',
  'Grim Skunk': 'Rock QC', 'Jim Corcoran': 'Rock QC', 'Richard Desjardins': 'Rock QC',
  'Richard Seguin': 'Rock QC', 'Luc De Larochellière': 'Rock QC', 'Damien Robitaille': 'Rock QC',
  'Claude Dubois': 'Rock QC', 'Michel Rivard': 'Rock QC', 'Les B.B.': 'Rock QC',
  'Vincent Vallières': 'Rock QC', 'Louis-Jean Cormier': 'Rock QC', 'Hubert Lenoir': 'Rock QC',
  'Gildor Roy': 'Rock QC', 'Loco Locass': 'Rock QC', 'Dubmatique': 'Rock QC',
  'Jean-Pierre Ferland': 'Rock QC', 'Mononc Serge': 'Rock QC', 'Les Appendices': 'Rock QC',
  'Kain': 'Rock QC', 'Les Frères À Chval': 'Rock QC', 'Lendemain De Veille': 'Rock QC',
  'Billy Hunter': 'Rock QC', 'Richard Petit': 'Rock QC', 'Martin Lapalme': 'Rock QC',
  'Bob Bissonnette': 'Rock QC', 'Hugo Lapointe': 'Rock QC', 'Pierre Lapointe': 'Rock QC',
  'Tryo': 'Rock QC',

  // POP QC
  'Celine Dion': 'Pop QC', 'Garou': 'Pop QC', 'Roch Voisine': 'Pop QC',
  'Isabelle Boulay': 'Pop QC', 'Laurence Jalbert': 'Pop QC', 'Joe Bocan': 'Pop QC',
  'Marie Carmen': 'Pop QC', 'Patrick Norman': 'Pop QC', 'Ginette Reno': 'Pop QC',
  'Michel Louvain': 'Pop QC', 'Yann Perreau': 'Pop QC', 'Daniel Boucher': 'Pop QC',
  'Julie Masse': 'Pop QC', 'Mes Aïeux': 'Pop QC', 'Gregory Charles': 'Pop QC',
  'Lisa LeBlanc': 'Pop QC', 'Fabienne Thibeault': 'Pop QC', 'Boule Noire': 'Pop QC',
  'Mario Pelchat': 'Pop QC', 'Jonathan Roy': 'Pop QC', 'Marc Dery': 'Pop QC',
  'Nanette Workman': 'Pop QC', 'Diane Dufresne': 'Pop QC', 'Donald Lautrec': 'Pop QC',
  'Garolou': 'Pop QC', 'La Bottine Souriante': 'Pop QC', 'Willie Lamothe': 'Pop QC',
  'Renee Martel': 'Pop QC',

  // COUNTRY
  'Johnny Cash': 'Country', 'Garth Brooks': 'Country', 'Kenny Rogers': 'Country',
  'Dolly Parton': 'Country', 'John Denver': 'Country', 'Hank Williams': 'Country',
  'Chris Stapleton': 'Country', 'Walker Hayes': 'Country', 'Billy Ray Cyrus': 'Country',
  'Alan Jackson': 'Country', 'Darius Rucker': 'Country', 'Morgan Wallen': 'Country',
  'Willie Nelson': 'Country', 'Josh Turner': 'Country', 'Cooper Alan': 'Country',
  'Dwight Yoakam': 'Country', 'Shaboozey': 'Country', 'Lonestar': 'Country',
  'Tom Cochrane': 'Country', 'Blue Rodeo': 'Country', 'Toby Keith': 'Country',
  'Zach Bryan': 'Country', 'Oliver Anthony Music': 'Country',
  'Lynyrd Skynyrd': 'Country', 'The Tragically Hip': 'Rock',

  // CLASSIQUES FR
  'Édith Piaf': 'Classiques FR', 'Francis Cabrel': 'Classiques FR', 'Charles Aznavour': 'Classiques FR',
  'Joe Dassin': 'Classiques FR', 'Jacques Dutronc': 'Classiques FR', 'Barbara': 'Classiques FR',
  'Patrick Bruel': 'Classiques FR', 'Vanessa Paradis': 'Classiques FR', 'Pierre Bachelet': 'Classiques FR',
  'Axelle Red': 'Classiques FR', 'Julien Clerc': 'Classiques FR', 'Michel Delpech': 'Classiques FR',
  'Dalida': 'Classiques FR', 'France Gall': 'Classiques FR', 'Françoise Hardy': 'Classiques FR',
  'Sylvie Vartan': 'Classiques FR', 'Michel Polnareff': 'Classiques FR', 'Renaud': 'Classiques FR',
  'Plastic Bertrand': 'Classiques FR', 'Bigflo & Oli': 'Classiques FR', 'Patrick Hernandez': 'Classiques FR',
  'Louise Attaque': 'Classiques FR', 'Indochine': 'Classiques FR', 'Manu Chao': 'Classiques FR',
  'Michel Sardou': 'Classiques FR', 'Claude Barzotti': 'Classiques FR', 'Alain Morisod': 'Classiques FR',
  'Manau': 'Classiques FR', 'Michel Fugain': 'Classiques FR', 'Christophe Maé': 'Classiques FR',
  'Christophe': 'Classiques FR', 'Pierre Lalonde': 'Classiques FR', 'Salvatore Adamo': 'Classiques FR',
  'Richard Anthony': 'Classiques FR', 'Didier Barbelivien': 'Classiques FR',
  'La Compagnie Créole': 'Classiques FR', 'Garolou': 'Classiques FR',
  'Félix Leclerc': 'Classiques FR', 'Zachary Richard': 'Classiques FR',

  // JAZZ/BLUES
  'Louis Armstrong': 'Jazz / Blues', 'Ray Charles': 'Jazz / Blues', 'Fats Domino': 'Jazz / Blues',
  'Robert Johnson': 'Jazz / Blues', 'Muddy Waters': 'Jazz / Blues',
  'Stevie Ray Vaughan': 'Jazz / Blues', 'Dobie Gray': 'Jazz / Blues',
  'Norah Jones': 'Jazz / Blues', 'Amy Winehouse': 'Jazz / Blues', 'Sade': 'Jazz / Blues',
  'Jonny Lang': 'Jazz / Blues', 'Dean Martin': 'Jazz / Blues', 'Frank Sinatra': 'Jazz / Blues',
  'Michael Bublé': 'Jazz / Blues', 'Bobby McFerrin': 'Jazz / Blues',
  'Buena Vista Social Club': 'Jazz / Blues', 'Jeff Buckley': 'Jazz / Blues',
  'Patricia Kaas': 'Jazz / Blues', 'James Brown': 'Jazz / Blues',
  'Leonard Cohen': 'Jazz / Blues', 'Gipsy Kings': 'Jazz / Blues',
  'Dan Bigras': 'Jazz / Blues',

  // ANNÉES 80
  'a-ha': 'Années 80', 'Duran Duran': 'Années 80', 'Tears For Fears': 'Années 80',
  'Culture Club': 'Années 80', 'Wham!': 'Années 80', 'Men Without Hats': 'Années 80',
  'Talk Talk': 'Années 80', 'Men At Work': 'Années 80', 'Laura Branigan': 'Années 80',
  'Toni Basil': 'Années 80', 'Katrina And The Waves': 'Années 80', 'Midnight Oil': 'Années 80',
  'The Cars': 'Années 80', 'Corey Hart': 'Années 80', 'Steve Miller Band': 'Années 80',
  'Van Halen': 'Années 80', 'Mötley Crüe': 'Années 80', 'Poison': 'Années 80',
  'Def Leppard': 'Années 80', 'Bon Jovi': 'Années 80', 'Bryan Adams': 'Années 80',
  'Don Henley': 'Années 80', 'Peter Gabriel': 'Années 80', 'Phil Collins': 'Années 80',
  'Genesis': 'Années 80', 'Paula Abdul': 'Années 80', 'Cyndi Lauper': 'Années 80',
  'Rick Astley': 'Années 80', 'The Bangles': 'Années 80', 'Lionel Richie': 'Années 80',
  'Robert Palmer': 'Années 80', 'Taco': 'Années 80', 'Billy Ocean': 'Années 80',
  'Bruce Springsteen': 'Années 80', 'Julian Lennon': 'Années 80', 'Tom Jones': 'Années 80',
  'Olivia Newton-John': 'Années 80', 'Irene Cara': 'Années 80', 'Twisted Sister': 'Années 80',
  'Quiet Riot': 'Années 80', 'Beastie Boys': 'Années 80', 'Berlin': 'Années 80',
  'Hall & Oates': 'Années 80', 'Frankie Valli': 'Années 80', 'Kenny Loggins': 'Années 80',
  'Laura Branigan': 'Années 80', 'Spice Girls': 'Années 80',
  'Backstreet Boys': 'Années 90', 'Milli Vanilli': 'Années 80',
  'Harry Belafonte': 'Jazz / Blues', 'Captain & Tennille': 'Années 80',
  'Stealers Wheel': 'Années 70', 'Nazareth': 'Rock', 'Supertramp': 'Années 70',
  'Philip Bailey': 'Années 80', 'Rod Stewart': 'Années 80', 'Blondie': 'Années 80',

  // ANNÉES 90
  'Nirvana': 'Années 90', 'Oasis': 'Années 90', 'Radiohead': 'Années 90',
  'No Doubt': 'Années 90', 'Sheryl Crow': 'Années 90', 'Collective Soul': 'Années 90',
  'Live': 'Années 90', 'Stone Temple Pilots': 'Années 90', 'R.E.M.': 'Années 90',
  'Hootie & The Blowfish': 'Années 90', 'Better Than Ezra': 'Années 90',
  'Fastball': 'Années 90', 'The Verve': 'Années 90', 'Blur': 'Années 90',
  'Crowded House': 'Années 90', 'Alanis Morissette': 'Années 90', 'Semisonic': 'Années 90',
  'Bush': 'Années 90', 'Everclear': 'Années 90', 'The Offspring': 'Années 90',
  'Green Day': 'Années 90', 'Moist': 'Années 90', 'Sam Roberts': 'Années 90',
  'The Smashing Pumpkins': 'Années 90', 'Soundgarden': 'Années 90', 'Alice In Chains': 'Années 90',
  'Pearl Jam': 'Années 90', 'Soul Asylum': 'Années 90', 'Tripping Daisy': 'Années 90',
  'The Cranberries': 'Années 90', 'Natalie Imbruglia': 'Années 90', 'Ace Of Base': 'Années 90',
  'Fugees': 'Années 90', 'Coolio': 'Années 90', 'Montell Jordan': 'Années 90',
  'Snow': 'Années 90', 'Ini Kamoze': 'Années 90', 'Marcy Playground': 'Années 90',
  'Our Lady Peace': 'Années 90', 'I Mother Earth': 'Années 90', 'Cracker': 'Années 90',
  'Everlast': 'Années 90', 'Tal Bachman': 'Années 90', 'Filter': 'Années 90',
  'Beck': 'Années 90', 'Goo Goo Dolls': 'Années 90', 'Haddaway': 'Années 90',
  'Snap': 'Années 90', 'Corona': 'Années 90', 'Deee-Lite': 'Années 90',
  'LP': 'Pop', 'The Dead South': 'Country', 'Rancid': 'Rock',
  'Pennywise': 'Rock', 'Bad Religion': 'Rock',

  // ROCK (défaut anglophone)
  'The Beatles': 'Rock', 'Led Zeppelin': 'Rock', 'AC/DC': 'Rock',
  'Guns N\' Roses': 'Rock', 'Metallica': 'Rock', 'The Rolling Stones': 'Rock',
  'Creedence Clearwater Revival': 'Rock', 'Queen': 'Rock', 'The Police': 'Rock',
  'U2': 'Rock', 'Red Hot Chili Peppers': 'Rock', 'Foo Fighters': 'Rock',
  'Aerosmith': 'Rock', 'The Doors': 'Rock', 'Jethro Tull': 'Rock',
  'Pink Floyd': 'Rock', 'Iron Maiden': 'Rock', 'Black Sabbath': 'Rock',
  'KISS': 'Rock', 'Ozzy Osbourne': 'Rock', 'Neil Young': 'Rock',
  'Eagles': 'Rock', 'Jimi Hendrix': 'Rock', 'Kansas': 'Rock',
  'The Tragically Hip': 'Rock', 'INXS': 'Rock', 'System Of A Down': 'Rock',
  'Linkin Park': 'Rock', 'Nickelback': 'Rock', 'Kings Of Leon': 'Rock',
  'Muse': 'Rock', 'The Struts': 'Rock', 'The Strokes': 'Rock',
  'The Hives': 'Rock', 'Franz Ferdinand': 'Rock', 'Bob Dylan': 'Rock',
  'Van Morrison': 'Rock', 'Blind Melon': 'Rock', 'Dave Matthews Band': 'Rock',
  'Tom Petty': 'Rock', 'Counting Crows': 'Rock', 'Creed': 'Rock',
  'Steppenwolf': 'Rock', 'Motörhead': 'Rock', 'Stray Cats': 'Rock',
  'Faith No More': 'Rock', 'Alice Cooper': 'Rock', 'Jack Johnson': 'Rock',
  'Santana': 'Rock', 'Ben Harper': 'Rock', 'Eric Clapton': 'Rock',
  'Dire Straits': 'Rock', 'The Doobie Brothers': 'Rock', 'Simon & Garfunkel': 'Rock',
  'Cat Stevens': 'Rock', 'Janis Joplin': 'Rock', 'The Animals': 'Rock',
  'Los Lonely Boys': 'Rock', 'Mungo Jerry': 'Rock', 'Evanescence': 'Rock',
  'Incubus': 'Rock', 'Disturbed': 'Rock', 'Nine Inch Nails': 'Rock',
  'Marilyn Manson': 'Rock', 'Skid Row': 'Rock', 'Gorillaz': 'Rock',
  'The White Stripes': 'Rock', 'Jamiroquai': 'Rock', 'Electric Light Orchestra': 'Rock',
  'David Bowie': 'Rock', 'The Clash': 'Rock', 'Sex Pistols': 'Rock',
  'Ramones': 'Rock', 'The Pogues': 'Rock', 'The Dubliners': 'Rock',
  'The Rumjacks': 'Rock', 'Huey Lewis & The News': 'Rock',

  // POP anglophone
  'Ed Sheeran': 'Pop', 'Adele': 'Pop', 'Coldplay': 'Pop',
  'The Weeknd': 'Pop', 'Bruno Mars': 'Pop', 'Justin Bieber': 'Pop',
  'Maroon 5': 'Pop', 'Jason Mraz': 'Pop', 'The Lumineers': 'Pop',
  'Mumford & Sons': 'Pop', 'Phillip Phillips': 'Pop', 'Meghan Trainor': 'Pop',
  'MAGIC!': 'Pop', 'Hozier': 'Pop', 'Harry Styles': 'Pop',
  'Tones And I': 'Pop', 'Post Malone': 'Pop', 'Benson Boone': 'Pop',
  'Gotye': 'Pop', 'Lil Nas X': 'Pop', 'Mark Ronson': 'Pop',
  'TALK': 'Pop', 'Train': 'Pop', 'Benjamin Ingrosso': 'Pop',
  'Avicii': 'Pop', 'Milow': 'Pop', 'House Of Pain': 'Pop',
  'OutKast': 'Pop', '2Pac': 'Pop', 'Eminem': 'Pop',

  // Autres
  'Elvis Presley': 'Rock', 'Chuck Berry': 'Rock', 'Buddy Holly': 'Rock',
  'Dion': 'Rock', 'Chubby Checker': 'Rock', 'Roy Orbison': 'Rock',
  'Jerry Lee Lewis': 'Rock', 'The Everly Brothers': 'Rock',
  'Bob Marley': 'Reggae', 'Sublime': 'Reggae', 'Garth Brooks': 'Country',
  'George Harrison': 'Rock', 'John Lennon': 'Rock', 'Paul McCartney': 'Rock',
  'Misc Soundtrack': 'Pop', 'Misc Musicals': 'Pop', 'Misc Traditional': 'Classiques FR',
  'ABBA': 'Pop', 'Bee Gees': 'Pop', 'Grease': 'Pop',
  'Michael Jackson': 'Pop', 'Madonna': 'Pop', 'Prince': 'Pop',
  'Whitney Houston': 'Pop', 'Mariah Carey': 'Pop', 'Celine Dion': 'Pop QC',
  'Kylie Minogue': 'Pop', 'Lady Gaga': 'Pop', 'Rihanna': 'Pop',
  'Beyoncé': 'Pop', 'Britney Spears': 'Pop', 'Justin Timberlake': 'Pop',
  'Enrique Iglesias': 'Pop', 'Ricky Martin': 'Pop', 'Lou Bega': 'Pop',
  'Spice Girls': 'Pop', 'Backstreet Boys': 'Pop',
  'War': 'Pop', 'Flo Rida': 'Pop', 'Sean Paul': 'Pop',
  'Kool & The Gang': 'Pop', 'Stevie Wonder': 'Pop',
  'Aretha Franklin': 'Jazz / Blues', 'Daft Punk': 'Pop',
  'Måneskin': 'Rock', 'Ofenbach': 'Pop', 'CAKE': 'Rock',
  'U2': 'Rock', 'Toto': 'Rock', 'Eagles': 'Rock',
  'The Beach Boys': 'Rock', 'Simon & Garfunkel': 'Rock',
  'Opus': 'Rock', 'Mr. Big': 'Rock', 'Extreme': 'Rock',
  'Foreigner': 'Rock', 'Cheap Trick': 'Rock',
  'Shocking Blue': 'Pop', 'Tony Orlando & Dawn': 'Pop',
  'John Mellencamp': 'Rock', 'John Paul Young': 'Pop',
  'Simply Red': 'Pop', 'The Irish Rovers': 'Rock',
  'Edie Brickell': 'Rock', 'Our Lady Peace': 'Années 90',
};

const lines = raw.trim().split('\n');
const seen = new Set();
const songs = [];

for (const line of lines) {
  const [artiste, titre] = line.split('|');
  if (!artiste || !titre) continue;
  const key = `${artiste.trim().toLowerCase()}||${titre.trim().toLowerCase()}`;
  if (seen.has(key)) continue;
  seen.add(key);
  const style = artistStyle[artiste.trim()] || 'Rock';
  songs.push({ titre: titre.trim(), artiste: artiste.trim(), style });
}

// Sort by style then artiste
songs.sort((a, b) => a.style.localeCompare(b.style) || a.artiste.localeCompare(b.artiste));

console.log(`// Répertoire Marco Solo Music — ${songs.length} chansons`);
console.log(`// Généré automatiquement depuis Ultimate Guitar — ${new Date().toISOString().split('T')[0]}`);
console.log(`const SONGS_DATA = ${JSON.stringify(songs, null, 2)};`);
