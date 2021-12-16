export async function ipfsGet (
  gateway,
  ipfsHash,
  protocolType = 'ifps'
) {
  const url = `https://${gateway}/${protocolType}/${ipfsHash}`;
  return await fetch(url).then((res) => {
    res.json();
  });
}

export default {
  ipfsGet,
}