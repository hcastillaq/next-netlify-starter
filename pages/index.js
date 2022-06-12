

export const Home  = (props) => {
  return <div>
    {props.services.map((service, index) => {
      return<div key={index}>
        <span>{service.title}</span>
      </div>
    })}
  </div>
}

export const getServerSideProps = async () => {
  const path = String(process.env.API_URL + '/services');
  const { data } = await fetch(path, {
    method: `GET`,
    headers: {
      Accept: `*/*`,
      'x-api-key': `${process.env.API_KEY}`,
    },
  }).then((resp) => resp.json());
  return {
    props: {
      services: data,
    },
  };
};
