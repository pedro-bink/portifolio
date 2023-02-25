import {
  GithubOutlined,
  HomeOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SocialMedia } from '../components/SocialMedia';
import { Input, Button } from 'antd';
import InfoCard from '../components/InfoCard';

type Inputs = {
  name: string;
  email: string;
  subject: string;
};

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    reset();
  };
  const { TextArea } = Input;

  return (
    <div className="flex flex-col gap-2 items-center w-full justify-center bg-white text-black h-full">
      <h1 className="text-2xl py-3 text-center w-full text-mainColor">
        Contato
      </h1>
      <hr className="w-[80%]" />

      <div className="p-4 flex flex-col items-center justify-evenly gap-2 w-full h-full text-base tablet:text-2xl tablet:flex-row">
        <div className="h-full flex flex-col items-center text-xl w-full justify-evenly gap-2 tablet:max-w-[500px] tablet:text tablet:p-3">
          <div className="flex flex-col gap-6">
            <InfoCard
              component={<MailOutlined className="text-3xl tablet:text-4xl " />}
              label="E-mail"
              text="phdss04@gmail.com"
            />
            <InfoCard
              component={
                <PhoneOutlined className="text-3xl tablet:text-4xl " />
              }
              label="Telefone"
              text="38984271999"
            />
            <InfoCard
              component={<HomeOutlined className="text-3xl tablet:text-4xl " />}
              label="Endereço"
              text="Pirapora - Minas Gerais"
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-4 border-2 w-full h-full tablet:p-3"
        >
          <label
            htmlFor="name"
            className="rounded max-w-[300px] w-full tablet:max-w-[500px]"
          >
            Nome
            <Input
              id="name"
              className="p-2 placeholder:font-bold"
              placeholder="Digite seu nome..."
              {...register('name', { required: true })}
            />
            {errors.name && (
              <span className="text-center text-sm text-red-500">
                Esse campo é obrigatório
              </span>
            )}
          </label>

          <label
            htmlFor="email"
            className=" rounded max-w-[300px] w-full tablet:max-w-[500px]"
          >
            E-mail
            <Input
              id="email"
              className="p-2 placeholder:font-bold"
              placeholder="Digite seu email..."
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="text-center text-sm text-red-500">
                Esse campo é obrigatório
              </span>
            )}
          </label>

          <label
            htmlFor="subject"
            className=" rounded max-w-[300px] w-full tablet:max-w-[500px]"
          >
            Assunto
            <Input
              id="subject"
              className="p-2 placeholder:font-bold"
              placeholder="Informe o assunto..."
              {...register('subject', { required: true })}
            />
            {errors.subject && (
              <span className="text-center text-sm text-red-500">
                Esse campo é obrigatório
              </span>
            )}
          </label>

          <label
            htmlFor="message"
            className=" rounded max-w-[300px] w-full tablet:max-w-[500px]"
          >
            Mensagem
            <TextArea
              id="message"
              className="p-2 max-w-[300px] w-full tablet:max-w-[500px] placeholder:font-bold"
              rows={4}
              placeholder="Mensagem"
            />
          </label>

          <div className="rounded py-2 max-w-[300px] w-full tablet:max-w-[500px]">
            <Button
              htmlType="submit"
              type="primary"
              className="w-full h-full py-4 font-bold bg-mainColor"
            >
              Enviar mensagem
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
