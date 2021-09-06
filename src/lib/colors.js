const data = {
	light: {
		gray: [ 'E5E7EB', 'D1D5DB' ],
		red: [ 'FEE2E2', 'FCA5A5' ],
		yellow: [ 'FEF3C7', 'FCD34D' ],
		green: [ 'D1FAE5', '6EE7B7' ],
		blue: [ 'DBEAFE', '93C5FD' ],
		indigo: [ 'E0E7FF', 'A5B4FC' ],
		purple: [ 'EDE9FE', 'C4B5FD' ],
		pink: [ 'FCE7F3', 'F9A8D4' ],
	},
	dark: {
		red: [ 'EF4444', 'F87171' ], //bg-red-500
		red2: [ 'DC2626', 'EF4444' ], //bg-red-600
		red3: [ 'B91C1C', 'DC2626' ], //bg-red-700
		blue: [ '3B82F6', '60A5FA' ], //bg-blue-500
		blue2: [ '2563EB', '3B82F6' ], //bg-blue-600
		blue3: [ '1D4ED8', '2563EB' ], //bg-blue-700
		blue4: [ '1E40AF', '1D4ED8' ], //bg-blue-700
		green: [ '10B981', '34D399' ], //bg-green-500
		green2: [ '059669', '10B981' ], //bg-green-600
		purple: [ '8B5CF6', 'A78BFA' ], //bg-purple-500
		purple2: [ '7C3AED', '8B5CF6' ], //bg-purple-600
		pink: [ 'EC4899', 'F472B6' ], //bg-pink-500
		pink1: [ 'DB2777', 'EC4899' ], //bg-pink-600
		pink3: [ 'BE185D', 'DB2777' ], //bg-pink-600
		indigo: [ '6366F1', '818CF8' ], //bg-indigo-500
		indigo2: [ '4F46E5', '6366F1' ], //bg-indigo-700
		indigo3: [ '4338CA', '4F46E5' ], //bg-indigo-700
		yellow: [ 'D97706', 'F59E0B' ], //bg-yellow-600
		yellow2: [ 'B45309', 'D97706' ], //bg-yellow-700
		yellow3: [ '92400E', 'B45309' ], //bg-yellow-700
		gray: [ '4B5563', '6B7280' ], //bg-gray-700
		gray2: [ '374151', '4B5563' ], //bg-gray-700
		gray3: [ '1F2937', '374151' ], //bg-gray-700
	}
}

const colors = Object.keys(data.light)

function getColors({ bg, color }) {

	( [ bg, color ]  = data[bg][color] )

	return { bg, color }

}

export { colors, getColors }