export type Source = {
	media: string;
	srcset: string;
};

export type Photo = {
	thumbnail: string;
	src: string;
	alt: string;
	sources: Source[];
};

const ids = [36, 43, 70, 102, 124, 142, 156, 242, 288, 289, 295, 361, 400, 488, 496, 515, 557, 607, 623, 645];
const verticalIds = [124, 289, 400, 488, 607];

const _photos: Photo[] = [];
const formatUrl = (id: number, longAxis: number, smallAxis: number, isVertical: boolean) =>
	`https://picsum.photos/id/${id}/${isVertical ? smallAxis : longAxis}/${isVertical ? longAxis : smallAxis}.webp`;

for (const id of ids) {
	const isVertical = verticalIds.includes(id);
	_photos.push({
		thumbnail: formatUrl(id, 120, 90, isVertical),
		src: formatUrl(id, 1600, 1200, isVertical),
		alt: `random picsum`,
		sources: [
			{
				media: '(max-width: 599px)',
				srcset: formatUrl(id, 600, 450, isVertical),
			},
			{
				media: '(min-width: 600px) and (max-width: 799px)',
				srcset: formatUrl(id, 800, 600, isVertical),
			},
			{
				media: '(min-width: 800px) and (max-width: 1199px)',
				srcset: formatUrl(id, 1200, 900, isVertical),
			},
			{
				media: '(min-width: 1200px)',
				srcset: formatUrl(id, 1600, 1200, isVertical),
			},
		],
	});
}
export const photos = [..._photos];
