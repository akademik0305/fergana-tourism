//===============================-< base >-===============================
export interface IMeta {
	current_page: number
	per_page: number
	total: number
	last_page: number
}

//===============================-< clubs >-===============================
export interface IClub {
	id: number
	phone: string
	name: string
	short_name: string
	description: string
	address: string
	geo: {
		latitude: number
		longitude: number
	}
	distance: string
	price: string
	currency: string
	max_players: number
	is_active: boolean
	rating: string
	main_image: string
	aviable_times: string[];
	carousel: string[]
}

export interface ISearchClubs {
	data: IClub[]
	pagination: IMeta
	message: string
	status: string
}
